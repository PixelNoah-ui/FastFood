import express from "express";
import { verifyStockBeforeCheckout } from "../controller/checkOutController.js";

const router = express.Router();

router.post("/verify-stock", verifyStockBeforeCheckout);

export default router;
