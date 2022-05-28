import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js";

export const logIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ username });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    existingUser.comparePassword(password, (error, match) => {
      if (!match) {
        return response
          .status(400)
          .send({ message: "The password is invalid" });
      }
    });

    existingUser.password =
      "4BA07F4BEDA28D608BCBAA438FB72E47200C6430641F43F953D105D7580556F2";

    return res.status(200).json({ existingUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const signUp = async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  if (password != confirmPassword) {
    return res.status(400).json({ message: "The passwords do not match" });
  }
  try {
    const exitstingUser = await UserModel.findOne({ username });
    if (exitstingUser) {
      return res
        .status(400)
        .json({ message: "This username is already taken!" });
    }
    const newUser = new UserModel({ username, password });
    const gotUser = await newUser.save();
    return res.status(200).json({ gotUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
