import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  caloriesRequired: Number,
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      Date: Date,
    },
  ],
});

export default mongoose.model("User", UserSchema);
