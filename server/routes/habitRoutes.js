import Habit from "../models/Habit.js";
import asyncHandler from "express-async-handler";

// ➕ Create Habit
export const createHabit = asyncHandler(async (req, res) => {
  const { title, description, habitualTime, dueDate, priority, category } =
    req.body;

  const habit = await Habit.create({
    title,
    description,
    habitualTime,
    dueDate,
    priority,
    category,
    user: req.user._id, // 🔥 comes from auth middleware
  });

  res.status(201).json(habit);
});

// 📥 Get all habits for logged-in user
export const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find({ user: req.user._id }).sort({
    createdAt: -1,
  });

  res.json(habits);
});

// 🔄 Update habit status
export const updateHabitStatus = asyncHandler(async (req, res) => {
  const { status } = req.body; // fighting | won | conceded

  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  // Ensure user owns habit
  if (habit.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  habit.status = status;

  // 🔥 LOGIC BASED ON STATUS
  if (status === "won") {
    habit.streak += 1;
    habit.completedAt = new Date();
  }

  if (status === "conceded") {
    habit.relapseCount += 1;
    habit.streak = 0;
    habit.lastRelapseAt = new Date();
  }

  const updatedHabit = await habit.save();

  res.json(updatedHabit);
});

// ❌ Delete habit
export const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  if (habit.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await habit.deleteOne();

  res.json({ message: "Habit removed" });
});
