import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  caloriesRequired: Number,
  meals: [MealSchema],
});

export default mongoose.model("User", UserSchema);
