import express from "express";
import {
  CreateUser,
  UpdateUser,
  GetUsers,
  GetMeals,
} from "../controllers/User.js";
const router = express.Router();

router.post("/create", CreateUser);
router.patch("/update/:id", UpdateUser);
router.get("/get-all", GetUsers);
router.get("/get-meals/:id", GetMeals);

export default router;
