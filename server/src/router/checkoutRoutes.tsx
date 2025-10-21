import express from "express";
import {
  createShippingAddress,
  verifyStockBeforeCheckout,
} from "../controller/checkOutController.js";

const router = express.Router();

router.post("/verify-stock", verifyStockBeforeCheckout);
router.post("/shipping-address", createShippingAddress);

export default router;
