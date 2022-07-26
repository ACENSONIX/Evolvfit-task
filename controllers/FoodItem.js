import FoodItem from "../models/FoodItem.js";

export const addFoodItem = async (req, res) => {
  const foodItem = new FoodItem(req.body);
  try {
    await foodItem.save();
    res.status(200).json(foodItem);
    console.log("FoodItem added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
