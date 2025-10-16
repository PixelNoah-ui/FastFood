import mongoose, { Model } from "mongoose";

export const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  role: {
    type: String,
    default: "user",
  },
  createdDate: Date,
});

type Iuser = mongoose.InferSchemaType<typeof userSchema>;

export const User: Model<Iuser> = mongoose.model<Iuser>("User", userSchema);
