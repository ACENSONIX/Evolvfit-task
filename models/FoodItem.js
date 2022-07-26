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
// },
// {
//     "name":"apple",
//     "calories":56 ,
//     "carbs":12,
//     "protien":0.3,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"banana",
//     "calories":80 ,
//     "carbs":20,
//     "protien":1,
//     "fat":0,
//     "acceptedUnits":"g",
//     "itemWeight":100
// },
// {
//     "name":"rice",
//     "calories":120 ,
//     "carbs":30,
//     "protien":2,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// }
// {
//     "name":"bread",
//     "calories":230 ,
//     "carbs":50,
//     "protien":8,
//     "fat":2,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"fish",
//     "calories":200 ,
//     "carbs":8,
//     "protien":20,
//     "fat":10,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
// {
//     "name":"cucumber",
//     "calories":10,
//     "carbs":2,
//     "protien":0.6,
//     "fat":0,
//     "acceptedUnits":"g"
//     "itemWeight":100
// },
