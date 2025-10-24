import express from "express";
import {
  chapaCallBack,
  createShippingAddress,
  initPayment,
  verifyStockBeforeCheckout,
} from "../controller/checkOutController.js";

const router = express.Router();

router.post("/verify-stock", verifyStockBeforeCheckout);
router.post("/shipping-address", createShippingAddress);
router.post("/init-payment", initPayment);
router.get("/chapa-callback", chapaCallBack);

export default router;
