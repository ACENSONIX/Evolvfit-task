import express from "express";
import { addFoodItem, getItems } from "../controllers/FoodItem.js";

const router = express.Router();

router.post("/addItem", addFoodItem);
router.get("/getItems", getItems);

export default router;
