import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  acceptedUnits: [String],
  itemWeight: Number,
});

export default mongoose.model("FoodItem", FoodItemSchema);
