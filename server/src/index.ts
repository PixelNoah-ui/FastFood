import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dishRouter from "./router/dishRouter.js";
import userRouter from "./router/userRouter.js";
import checkoutRouter from "./router/checkoutRoutes.js";
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/dishes", dishRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/checkout", checkoutRouter);

app.all("/{*any}", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});
export default app;
