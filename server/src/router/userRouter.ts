import express from "express";
import { getUser, signUp } from "../controller/userController.js";
const router = express.Router();

router.post("/signup", signUp);
router.get("/:email", getUser);
export default router;
