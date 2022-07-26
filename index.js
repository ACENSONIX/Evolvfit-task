import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import FoodItemRouter from "./routes/FoodItem.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/foodItems", FoodItemRouter);
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
    console.log("Connected to MongoDB");
    console.log(`Server running on port ${PORT}`);
  })
  .catch((err) => {
    console.log(err.message);
  });