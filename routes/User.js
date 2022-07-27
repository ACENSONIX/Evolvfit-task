import express from "express";
import {
  CreateUser,
  UpdateUser,
  GetUsers,
  GetMeals,
} from "../controllers/User.js";
const router = express.Router();

router.post("/create", CreateUser);
router.patch("/update/", UpdateUser);
router.get("/get-all", GetUsers);
router.get("/get-meals", GetMeals);

export default router;
