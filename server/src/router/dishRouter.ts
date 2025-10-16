import express from "express";
import {
  getCollections,
  getDishes,
  getPopularDishes,
} from "../controller/dishController.js";

const router = express.Router();

router.get("/", getDishes).get("/popular", getPopularDishes);
router.get("/collections", getCollections);
app.post("/create");

export default router;
