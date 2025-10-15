import { Dishes } from "../model/dishesModel.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getDishes = catchAsync(async (req, res, next) => {
  const dishes = await Dishes.find();
  if (!dishes.length) {
    return next(new AppError("There is no dishes available", 404));
  }

  const totalDishes = await Dishes.find().countDocuments();
  const limit = 9;
  const totalPage = Math.ceil(totalDishes / limit);

  res.status(200).json({
    status: "success",
    data: dishes,
    totalPage,
  });
});

export const getPopularDishes = catchAsync(async (req, res, next) => {
  const dishes = await Dishes.find().sort({ rating: -1 }).limit(4);

  if (!dishes || dishes.length === 0) {
    return next(new AppError("No popular dishes available", 404));
  }

  res.status(200).json({
    status: "success",
    results: dishes.length,
    data: dishes,
  });
});
