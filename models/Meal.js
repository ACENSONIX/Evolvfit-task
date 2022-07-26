import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "snack"],
    default: "breakfast",
  },
  name: String,
  mealItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodItem",
    },
  ],
});

export default mongoose.model("Meal", MealSchema);
