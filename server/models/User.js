import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: true,
      min: 8,
      trim: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

// 🔥 HASH PASSWORD BEFORE SAVE
userSchema.pre("save", async function (next) {
  const user = this;
  // Only hash if password is modified
  if (!user.isModified("password")) {
    return next();
  }

  // Generate salt
  const salt = await bcrypt.genSalt(10);

  // Hash password
  user.password = await bcrypt.hash(user.password, salt);

  next();
});

const User = mongoose.model("User", userSchema);
export default User;
