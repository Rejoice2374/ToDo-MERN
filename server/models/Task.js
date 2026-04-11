import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      min: 2,
      max: 2000,
    },
    habitualTime: {
      type: Date,
    },
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    status: {
      type: String,
      enum: ["fighting", "won", "conceded"],
      default: "fighting",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
    },
    category: {
      type: [String],
      enum: ["work", "personal"],
    },
    completedAt: {
      type: Date,
    },
    user: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],
  },
  { timeStamp: true },
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
