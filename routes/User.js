import express from "express";

const router = express.Router();

router.post("/addMeal", AddMeal);
router.get("/getMeals", GetMeals);
router.patch("/updateMeals", UpdateMeal);
