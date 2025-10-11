import mongoose from "mongoose";
import dotenv from "dotenv";
import AppError from "../utils/AppError.js";

dotenv.config();

export const connectDb = async () => {
  const url = process.env.MONGODB_URL as string;
  const password = process.env.PASSWORD;
  if (!password) {
    return new AppError("somthing wrong", 401);
  }
  const dbUrl = url.replace("<password>", password);
  try {
    const db = await mongoose.connect(dbUrl);
    console.log(`✅ MongoDB connected: ${db.connection.host}`);
  } catch (error) {
    console.log("Error:", error);
    process.exit();
  }
};
