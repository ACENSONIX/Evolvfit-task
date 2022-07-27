import Meal from "../models/Meal.js";
import FoodItem from "../models/FoodItem.js";
import OptimiseMeal from "../temp.js";

export const CreateMeal = async (req, res) => {
  const meal = new Meal(req.body);

  try {
    await meal.save();
    res.status(200).json(meal);
    console.log("Meal added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const GetMeals = async (req, res) => {
  try {
    const meals = await Meal.find().populate("mealItems");
    res.status(200).json(meals);
    console.log("Meals retrieved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const UpdateMeal = async (req, res) => {
  try {
    const id = req.params.id;

    const meal = await Meal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(req.params.id);
    res.status(200).send(meal);
    // console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const Optimise = async (req, res) => {
  try {
    const foodItems = await FoodItem.find().sort({ protien: -1 });
    const meal = new Meal(req.body);
    const optimisedMeal = OptimiseMeal(req.body.maxcalories, foodItems);
    meal.mealItems = optimisedMeal.mealItems;
    await meal.save();

    console.log(OptimiseMeal);
    res.status(200).json(meal);
    console.log("Meals retrieved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
