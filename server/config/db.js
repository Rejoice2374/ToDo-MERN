import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoDB_URL = process.env.MONGODB_URL;
const connectDb = () => {
  return mongoose
    .connect(MongoDB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

export default connectDb;
