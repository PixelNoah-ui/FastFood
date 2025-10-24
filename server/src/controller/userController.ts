import { ShippingAddress } from "../model/shippingModel.js";
import { User } from "../model/userModel.js";
import AppError from "../utils/AppError.js";
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

  res.status(200).json({
    status: "success",
    data: user,
  });
});

export const createUSerShippingAddress = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) {
    return next(new AppError("User not found", 404));
  }

  const isShippingAddressExist = await ShippingAddress.findOne({
    user: user._id,
  });

  if (isShippingAddressExist) {
  }
  const { fullName, phoneNumber, email, address, delveryInstructions } =
    req.body;

  const shippingAddress = await ShippingAddress.create({
    fullName,
    email,
    phoneNumber,
    address,
    delveryInstructions,
    user: user._id,
  });
  res.status(200).json({
    status: "success",
    data: shippingAddress,
  });
});
