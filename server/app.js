import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Welcome to the NoDo API",
    description: "An API to help users fight bad habits and track progress",

    endpoints: {
      auth: {
        register: {
          method: "POST",
          url: "/api/users/register",
          description: "Register a new user",
        },
        login: {
          method: "POST",
          url: "/api/users/login",
          description: "Login user and get token",
        },
      },

      habits: {
        createHabit: {
          method: "POST",
          url: "/api/habits",
          description: "Create a new habit",
        },
        getHabits: {
          method: "GET",
          url: "/api/habits",
          description: "Get all habits for logged-in user",
        },
        updateHabit: {
          method: "PUT",
          url: "/api/habits/:id",
          description: "Update habit details",
        },
        updateStatus: {
          method: "PUT",
          url: "/api/habits/:id/status",
          description: "Update habit status (won, conceded, fighting)",
        },
        deleteHabit: {
          method: "DELETE",
          url: "/api/habits/:id",
          description: "Delete a habit",
        },
        stats: {
          method: "GET",
          url: "/api/habits/stats",
          description: "Get dashboard statistics",
        },
      },
    },
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
