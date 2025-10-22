import express from "express";
import { getUser, signUp } from "../controller/userController.js";
import { createShippingAddress } from "../controller/checkOutController.js";
const router = express.Router();

router.post("/signup", signUp);
router.get("/:email", getUser);
router.post("/address/:userId", createShippingAddress);
export default router;
