import { Order } from "../model/orderModel.js";
import { User } from "../model/userModel.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getOrder = catchAsync(async (req, res, next) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  if (!user) {
    return next(new AppError("Please login to access your orders", 401));
  }

  const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });

  if (!orders || orders.length === 0) {
    return res.status(200).json({
      status: "success",
      message: "No orders found for this user",
      data: [],
    });
  }

  res.status(200).json({
    status: "success",
    data: orders,
  });
});
