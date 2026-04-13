import express from "express";
import {
  createHabit,
  getHabits,
  updateHabitStatus,
  deleteHabit,
  updateHabit,
  getHabitStats,
} from "../controllers/habitController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createHabit);
router.get("/", protect, getHabits);
router.put("/:id/status", protect, updateHabitStatus);
router.put("/:id", protect, updateHabit);
router.delete("/:id", protect, deleteHabit);
router.get("/stats", protect, getHabitStats);

export default router;
