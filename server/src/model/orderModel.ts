import mongoose, { Model } from "mongoose";

const lineItemSchema = new mongoose.Schema({
  dishId: { type: mongoose.SchemaTypes.ObjectId, ref: "Dishes" },
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  subtotal: Number,
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  items: [lineItemSchema],
  amount: { type: Number, required: true },
  tx_ref: { type: String, required: true, unique: true },
  isPaid: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
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

  chapaResponse: mongoose.SchemaTypes.Mixed,
  paymentMethod: { type: String },
  transactionId: { type: String },
  amountPaid: { type: Number },
  paidAt: { type: Date },

  createdAt: { type: Date, default: Date.now },
});

type IOrder = mongoose.InferSchemaType<typeof orderSchema>;

export const Order: Model<IOrder> = mongoose.model<IOrder>(
  "Order",
  orderSchema
);
