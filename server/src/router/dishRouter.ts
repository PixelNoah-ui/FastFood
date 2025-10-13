import express from "express";
import { getDishes, getPopularDishes } from "../controller/dishController.js";

const router = express.Router();

router.get("/", getDishes).get("/popular", getPopularDishes);

export default router;
