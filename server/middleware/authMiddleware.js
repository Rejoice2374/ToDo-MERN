import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "express-async-handler";

// 🔒 Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1️⃣ Check for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // 2️⃣ Extract token
    token = req.headers.authorization.split(" ")[1];

    // 3️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ Get user from DB (exclude password)
    req.user = await User.findById(decoded.id).select("-password");

    // 5️⃣ Continue to next middleware/controller
    next();
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

export default protect;
