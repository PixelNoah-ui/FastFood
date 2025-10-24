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
router.post("/payments/initialize", initPayment);
router.post("/chapa-callback", chapaCallBack);

export default router;
