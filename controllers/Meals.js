import Meal from "../models/Meal.js";

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
    const meals = await Meal.find();
    res.status(200).json(meals);
    console.log("Meals retrieved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const UpdateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(meal);
    console.log("Meal updated");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
