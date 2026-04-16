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
  res.send(`
    <h1>🚀 Welcome to the NoDo API</h1>
    <p>An API to help users fight bad habits and track progress</p>
    <h2>Endpoints</h2>
    <h3>Authentication</h3>
    <ul>
      <li><strong>Register:</strong> POST<br> <i>/api/auth/register</i></li>
      <li><strong>Login:</strong> POST<br> <i>/api/auth/login</i></li>
    </ul>
    <h3>Habits</h3>
    <ul>
      <li><strong>Create Habit:</strong> POST<br> <i>/api/habits</i></li>
      <li><strong>Get Habits:</strong> GET <br><i>/api/habits</i></li>
      <li><strong>Update Habit:</strong> PUT <br><i>/api/habits</i>/:id</li>
      <li><strong>Update Status:</strong> PUT <br><i>/api/habits</i>/:id/status</li>
      <li><strong>Delete Habit:</strong> DELETE <br><i>/api/habits</i>/:id</li>
      <li><strong>Get Stats:</strong> GET <br><i>/api/habits</i>/stats</li>
    </ul>
  `);
});
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
