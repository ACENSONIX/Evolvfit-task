import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protien: Number,
  carbs: Number,
  fat: Number,
  acceptedUnits: {
    type: String,
    enum: ["g", "kg", "ml", "item"],
    default: "g",
  },
  itemWeight: Number,
});

export default mongoose.model("FoodItem", FoodItemSchema);
