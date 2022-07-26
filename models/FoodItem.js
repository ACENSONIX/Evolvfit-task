import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
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

// {
//     "name":"milk",
//     "calories":65 ,
//     "carbs":5,
//     "protien":3.3,
//     "fat":4,
//     "acceptedUnits":"ml",
//     "itemWeight":100
// },
// {
//     "name":"eggs",
//     "calories":150 ,
//     "carbs":0,
//     "protien":12,
//     "fat":11,
//     "acceptedUnits":"item",
//     "itemWeight":100
// },
// {
//     "name":"chicken",
//     "calories":150 ,
//     "carbs":0,
//     "protien":25,
//     "fat":25,
//     "acceptedUnits":"g"
//     "itemWeight":100
// }
//
