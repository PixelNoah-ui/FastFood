import express from "express";
import { getOrder } from "../controller/orderController.js";
const router = express.Router();
router.get("/:userId", getOrder);
export default router;
