import express from "express";
import { addFoodItem, getItems } from "../controllers/FoodItem.js";

const router = express.Router();

router.post("/Item", addFoodItem);
router.get("/Items", getItems);

export default router;
