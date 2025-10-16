import { User } from "../model/userModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const signUp = catchAsync(async (req, res, next) => {
  const { name, email, avatar } = req.body;

  const user = await User.create({ name, email, avatar });

  res.status(200).json({
    status: "success",
    message: "Account created successfully",
  });
});
