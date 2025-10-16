import mongoose, { Model, mongo } from "mongoose";

export const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Ueer",
    required: [true, "User is required"],
  },
  items: [
    {
      dish: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Dishes",
        required: [true, "dish is required"],
      },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: String, required: true },
      images: String,
    },
  ],
  totalPrice: {
    type: Number,
    required: [true, "totalPrice is required"],
  },
  isPaid: {
    type: String,
    default: "pending",
  },
  paymentMethod: {
    type: String,
    default: "cash",
  },
  paidAt: {
    type: Date,
    default: Date.now(),
  },
  orderStatus: {
    type: String,
    enum: [
      "pending",
      "preparing",
      "ready",
      "out_for_delivery",
      "delivered",
      "cancelled",
    ],
    default: "pending",
  },
  shippingAddress: {
    street: { type: String, required: [true, "street is required"] },
    city: { type: String, required: [true, "city is required"] },
    phone: { type: String, required: [true, "phone is required"] },
  },
});
type Iorder = mongoose.InferSchemaType<typeof orderSchema>;

export const Orde: Model<Iorder> = mongoose.model<Iorder>("Order", orderSchema);
