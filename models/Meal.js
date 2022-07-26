import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  category: [String],
  name: String,
  foodItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodItem",
    },
  ],
});

export default mongoose.model("Meal", MealSchema);
