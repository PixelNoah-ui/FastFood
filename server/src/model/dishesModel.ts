import mongoose, { Model } from "mongoose";

export const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Dishes name is required"],
    },
    description: {
      type: String,
      required: [true, "Dishes descriptions id required"],
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [300, "Description must be under 300 characters"],
    },
    images: {
      type: String,
      required: [true, "Dishes image is required"],
    },
    price: {
      type: Number,
      required: [true, "Dishe price required"],
      min: [1, "Price must be at least 1"],
      max: [10000, "Price must be under 10000"],
    },
    rating: {
      type: Number,
      required: [true, "Dishes rating is required"],
      min: [0, "Rating cannot be less than 0"],
      max: [5, "Rating cannot be more than 5"],
      default: 0,
    },
  },
  { timestamps: true }
);

type DishTypes = mongoose.InferSchemaType<typeof dishesSchema>;

export const Dishes: Model<DishTypes> = mongoose.model<DishTypes>(
  "Dishes",
  dishesSchema
);
