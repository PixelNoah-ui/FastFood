import mongoose from "mongoose";

export const shippinSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: [true, "User is required"],
  },
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  email: String,
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  delveryInstructions: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

type IShipping = mongoose.InferSchemaType<typeof shippinSchema>;

export const ShippingAddress = mongoose.model<IShipping>(
  "ShippingAddress",
  shippinSchema
);
