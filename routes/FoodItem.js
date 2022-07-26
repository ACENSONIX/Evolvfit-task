import express from "express";
import { addFoodItem } from "../controllers/FoodItem.js";

const router = express.Router();

router.post("/addItem", addFoodItem);

export default router;
