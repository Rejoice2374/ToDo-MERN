import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      minlength: 2,
      maxlength: 2000,
    },

    // When the urge usually happens
    habitualTime: {
      type: Date,
    },

    // Optional deadline
    dueDate: Date,

    completed: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["fighting", "won", "conceded"],
      default: "fighting",
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    // Better for habit tracking
    category: {
      type: String,
      enum: ["work", "personal", "health", "addiction"],
      default: "personal",
    },

    // Track when user succeeded
    completedAt: Date,

    // 🔥 NEW: Track streak
    streak: {
      type: Number,
      default: 0,
    },

    // 🔥 NEW: Track relapses
    relapseCount: {
      type: Number,
      default: 0,
    },

    // 🔥 NEW: Last relapse time
    lastRelapseAt: Date,

    // 🔗 Link to user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
