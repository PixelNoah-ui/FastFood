import mongoose, { Model, mongo } from "mongoose";

export const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: [true, "user  is required"],
  },
  dish: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Dishes",
    required: [true, "dish  is required"],
  },

  createdDate: Date,
});

type Icart = mongoose.InferSchemaType<typeof cartSchema>;

export const Cart: Model<Icart> = mongoose.model<Icart>("Cart", cartSchema);
