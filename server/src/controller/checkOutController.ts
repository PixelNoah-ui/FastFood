import { Dishes } from "../model/dishesModel.js";
import { Order } from "../model/orderModel.js";
import { ShippingAddress } from "../model/shippingModel.js";
import { User } from "../model/userModel.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
interface dishTypes {
  id: string;
  name: string;
  description: string;
  price: number;
  categry: string;
  rating: number;
  image: string;
  stock: number;
  quantity: number;
}

const CHAPA_INIT = "https://api.chapa.co/v1/transaction/initialize";
const CHAPA_VERIFY = "https://api.chapa.co/v1/transaction/verify";
const CHAPA_SECRET = process.env.CHAPA_SECRET_KEY;

export const verifyStockBeforeCheckout = catchAsync(async (req, res, next) => {
  const { cartItems } = req.body;
  console.log(cartItems);

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "No items in the cart",
    });
  }

  const productIds = cartItems.map((item: { id: string }) => item.id);
  const dishes = await Dishes.find({ _id: { $in: productIds } });

  const stockIssues: {
    id: string;
    name: string;
    requestedStock: number;
    availableStock: number;
  }[] = [];

  cartItems.forEach((item: { id: string; quantity: number }) => {
    const dish = dishes.find((d) => d._id.toString() === item.id);
    if (dish && item.quantity > dish.stock) {
      stockIssues.push({
        id: dish._id.toString(),
        name: dish.name,
        availableStock: dish.stock,
        requestedStock: item.quantity,
      });
    }
  });

  if (stockIssues.length > 0) {
    return res.status(400).json({
      status: "fail",
      stockIssues,
    });
  }
  res.status(200).json({
    status: "success",
    message: "All items are in stock",
  });
});

export const createShippingAddress = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const { fullName, address, phoneNumber, email, delveryInstructions } =
    req.body;

  const filter = { user: userId };
  const update = {
    user: userId,
    fullName,
    address,
    phoneNumber,
    email,
    delveryInstructions,
  };

  const options = { new: true, upsert: true, setDefaultsOnInsert: true };

  const Address = await ShippingAddress.findOneAndUpdate(
    filter,
    update,
    options
  );

  if (!Address) {
    return res.status(500).json({
      status: "fail",
      message: "Failed to save shipping address",
    });
  }

  res.status(200).json({
    status: "success",
    data: Address,
  });
});

export const initPayment = catchAsync(async (req, res, next) => {
  console.log(CHAPA_SECRET);
  const { cartItems, userId } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    next(new AppError("Please login to access the service", 401));
  }
  if (!cartItems || cartItems.length === 0) {
    next(new AppError("cart is empty", 400));
  }

  const amount = cartItems.reduce(
    (s: number, it: dishTypes) => s + it.price * it.quantity,
    0
  );

  const tx_ref = `order_${Date.now()}_${user?._id}`;

  const order = await Order.create({
    user: userId,
    items: cartItems.map((it: dishTypes) => ({
      dishId: it.id,
      name: it.name,
      price: it.price,
      quantity: it.quantity,
      image: it.image,
      subtotal: it.price * it.quantity,
    })),
    amount,
    tx_ref,
    orderStatus: "pending",
  });

  const body = {
    amount,
    currency: "ETB",
    tx_ref,
    email: user?.email,
    first_name: user?.name,
    callback_url: `${process.env.BACKEND_BASE_URL}/checkout/chapa-callback`,
    return_url: `${process.env.NEXT_FRONT_API_URL}/myorder`,
    metadata: { orderId: order._id.toString() },
  };

  const resp = await fetch(CHAPA_INIT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CHAPA_SECRET}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("response", resp);

  if (!resp.ok) {
    const text = await resp.text();
    return res
      .status(502)
      .json({ status: "fail", message: "Chapa init failed", details: text });
  }

  const data = await resp.json();
  const checkout_url = data?.data?.checkout_url ?? data?.data?.url;

  res.status(200).json({ status: "success", data: checkout_url });
});

export const chapaCallBack = catchAsync(async (req, res, next) => {
  const { trx_ref } = req.params;

  const verifyResp = await axios.get(`${CHAPA_VERIFY}/${trx_ref}`, {
    headers: { Authorization: `Bearer ${CHAPA_SECRET}` },
  });

  const chapaData = verifyResp.data?.data ?? verifyResp.data;

  const status = chapaData?.status ?? verifyResp.data?.status;

  if (status === "success") {
    const paymentMethod =
      chapaData?.payment_type ||
      chapaData?.payment_method ||
      chapaData?.channel ||
      chapaData?.transaction?.payment_type ||
      null;

    const transactionId =
      chapaData?.reference ||
      chapaData?.tx_ref ||
      chapaData?.transaction?.reference ||
      null;

    const amountPaid =
      chapaData?.amount ?? chapaData?.transaction?.amount ?? null;

    await Order.findOneAndUpdate(
      { tx_ref: trx_ref },
      {
        status: "paid",
        orderStatus: "preparing",
        paymentMethod,
        transactionId,
        amountPaid,
        paidAt: new Date(),
        chapaResponse: chapaData,
      },
      { new: true }
    );
  }

  res.status(200).json({ received: true });
});
