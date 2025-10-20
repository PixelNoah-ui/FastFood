import { Dishes } from "../model/dishesModel.js";
import { catchAsync } from "../utils/catchAsync.js";

export const verifyStockBeforeCheckout = catchAsync(async (req, res, next) => {
  const { cartItems } = req.body;

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

  cartItems.forEach((item: { _id: string; quantity: number }) => {
    const dish = dishes.find((d) => d._id.toString() === item._id);
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
