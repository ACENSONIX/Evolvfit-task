import User from "../models/User.js";
import Meal from "../models/Meal.js";

export const CreateUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(200).json(user);
    console.log("User added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { meals } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { meals },
      {
        new: true,
      }
    );
    console.log(id);
    res.status(200).send(user);
    // console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const GetUsers = async (req, res) => {
  try {
    const users = await User.find().populate("meals.meal");
    res.status(200).json(users);
    console.log("Users retrieved");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const GetMeals = async (req, res) => {
  const { Userid } = req.query;
  try {
    const user = await User.findById({ _id: Userid }).populate("meals.meal");
    res.status(200).json(user);
    console.log(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
