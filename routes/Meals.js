import express from "express";
import {
  CreateMeal,
  GetMeals,
  UpdateMeal,
  Optimise,
} from "../controllers/Meals.js";

const router = express.Router();

router.post("/create", CreateMeal);
router.get("/get-all", GetMeals);
router.patch("/update/", UpdateMeal);
router.post("/optimise", Optimise);

// router.post("/protienMeal",);

export default router;
