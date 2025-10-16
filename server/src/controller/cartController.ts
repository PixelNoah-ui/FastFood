import { Cart } from "../model/cartModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const createCart = catchAsync(async (req, res, next) => {
  const data = req.body;

  const cart = await Cart.create(data);

  res.status(200).json({
    status: "success",
    message: "Cart added successfully",
  });
});
