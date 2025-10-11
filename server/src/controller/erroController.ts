import type { Request, Response, NextFunction } from "express";
import type AppError from "../utils/AppError.js";

export const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  const error = { ...err };
  if (process.env.PRODUCTION === "production") {
    sendProductionError(error, res);
  }

  sendDevelopmentError(error, res);
};

const sendProductionError = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  console.log("Errro", err);
  res.status(500).json({
    status: "error",
    message: "something wrong",
  });
};

const sendDevelopmentError = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }
};
