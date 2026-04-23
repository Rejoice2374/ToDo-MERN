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
  const { status } = req.body;

  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  if (habit.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const today = new Date().toDateString();

  // 🚫 prevent multiple clicks per day
  if (
    habit.lastActionDate &&
    new Date(habit.lastActionDate).toDateString() === today
  ) {
    return res
      .status(400)
      .json({ message: "You already logged today’s action" });
  }

  // ✅ HANDLE STATUS
  if (status === "won") {
    habit.streak += 1;
    habit.wins += 1;
    habit.longestStreak = Math.max(habit.longestStreak, habit.streak);
    habit.completedAt = new Date();
  }

  if (status === "conceded") {
    habit.relapseCount += 1;
    habit.streak = 0;
    habit.lastRelapseAt = new Date();
  }

  habit.status = status;
  habit.lastActionDate = new Date();

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

// ✏️ Update habit details
export const updateHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);

  if (!habit) {
    return res.status(404).json({ message: "Habit not found" });
  }

  if (habit.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  Object.assign(habit, {
    title: req.body.title || habit.title,
    description: req.body.description || habit.description,
    habitualTime: req.body.habitualTime || habit.habitualTime,
    category: req.body.category || habit.category,
    priority: req.body.priority || habit.priority,
    dueDate: req.body.dueDate || habit.dueDate,
  });

  const updatedHabit = await habit.save();

  res.json(updatedHabit);
});

// 📊 Get Dashboard Stats
export const getHabitStats = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // 1️⃣ Fetch all user habits
  const habits = await Habit.find({ user: userId });

  // 2️⃣ Basic counts
  const totalHabits = habits.length;

  const fighting = habits.filter((h) => h.status === "fighting").length;
  const won = habits.filter((h) => h.status === "won").length;
  const conceded = habits.filter((h) => h.status === "conceded").length;

  // 3️⃣ Performance metrics
  const totalRelapses = habits.reduce(
    (acc, h) => acc + (h.relapseCount || 0),
    0,
  );

  const totalWins = habits.reduce((acc, h) => acc + (h.wins || 0), 0);

  const longestStreak = habits.reduce(
    (max, h) => Math.max(max, h.longestStreak || 0),
    0,
  );

  // 4️⃣ Due soon (next 3 days)
  const now = new Date();
  const threeDaysLater = new Date();
  threeDaysLater.setDate(now.getDate() + 3);

  const dueSoon = habits.filter(
    (h) => h.dueDate && h.dueDate <= threeDaysLater,
  );

  const dueSoonCount = habits.filter(
    (h) => h.dueDate && h.dueDate <= threeDaysLater,
  ).length;

  // 5️⃣ Recently relapsed (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const recentRelapses = habits.filter(
    (h) => h.lastRelapseAt && h.lastRelapseAt >= sevenDaysAgo,
  );

  const recentRelapsesCount = habits.filter(
    (h) => h.lastRelapseAt && h.lastRelapseAt >= sevenDaysAgo,
  ).length;

  // 6️⃣ Send response
  res.json({
    totalHabits,
    statusBreakdown: {
      fighting,
      won,
      conceded,
    },
    performance: {
      totalRelapses,
      totalWins,
      longestStreak,
    },
    insights: {
      dueSoonCount,
      recentRelapsesCount,
    },
    dueSoon,
    recentRelapses,
  });
});
