import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoDB_URL = process.env.MONGOdB_URL;
const connectDb = () => {
  return mongoose
    .connect(MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

export default connectDb;