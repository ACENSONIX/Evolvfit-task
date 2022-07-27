import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import FoodItemRouter from "./routes/FoodItem.js";
import MealRouter from "./routes/Meals.js";
import UserRouter from "./routes/User.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/foodItems", FoodItemRouter);
app.use("/meals", MealRouter);
app.use("/user", UserRouter);
app.use(cors());
// app.use("/api/meals", FoodItemRouter);

const CONNECTIONS_URL =
  "mongodb+srv://acensonix:fNxd4PWrWKdNocT4@cluster0.xhl0k.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTIONS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

//Populate Meal Items for user
//
