import express from "express";
import { CreateMeal, GetMeals, UpdateMeal } from "../controllers/Meals.js";

const router = express.Router();

router.post("/createMeal", CreateMeal);
router.post("/getMeals", GetMeals);
router.patch("/updateMeal", UpdateMeal);

// router.post("/protienMeal",);

export default router;
