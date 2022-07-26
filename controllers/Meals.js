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
    // const meal = await Meal.findByIdAndUpdate(req.body.mealID, req.body, {
    //   new: true,
    // });
    // const id = req.body.mealID;
    // const meal = await Meal.find({ _id: id });
    res.status(200).json(meal);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
