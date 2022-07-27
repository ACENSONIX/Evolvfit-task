import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  caloriesRequired: Number,

  meals: [
    {
      meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
      },
      Date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model("User", UserSchema);
