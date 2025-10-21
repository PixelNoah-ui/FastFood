import { ShippingAddress } from "../model/shippingModel.js";
import { User } from "../model/userModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const signUp = catchAsync(async (req, res, next) => {
  const { name, email, avatar } = req.body;

  const user = await User.create({ name, email, avatar });

  res.status(200).json({
    status: "success",
    data: user,
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  console.log("Fetched user:", user);

  res.status(200).json({
    status: "success",
    data: user,
  });
});

export const createUSerShippingAddress = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const { fullName, phoneNumber, email, address, delveryInstructions } =
    req.body;
  const shippingAddress = await ShippingAddress.create({
    fullName,
    email,
    phoneNumber,
    address,
    delveryInstructions,
    user: userId,
  });
  res.status(200).json({
    status: "success",
    data: shippingAddress,
  });
});
