import User from "../models/User";
import Meal from "../models/Meal";

export const addMeal = async (req, res) => {
  const user = await User.findById(req.body.userID);
  const meal = Meal.findById(req.body.mealID);
  user.meals.push(meal);
  try {
    await user.save();
    res.status(200).json(user);
    console.log("Meal added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
