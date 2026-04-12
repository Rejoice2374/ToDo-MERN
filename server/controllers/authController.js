import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// 🔐 Generate Token
const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

// 📝 REGISTER
export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Creates user in the database (password will be hashed automatically)
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  res.status(201).json({
    message: "User registered successfully",
    _id: user._id,
    firstName: user.firstName,
    email: user.email,
    token: generateToken(user._id),
  });
});

// 🔐 LOGIN
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Email / password is incorrect" });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Email / password is incorrect" });
  }

  res.json({
    message: "User logged in successfully",
    _id: user._id,
    firstName: user.firstName,
    email: user.email,
    token: generateToken(user._id),
  });
});
