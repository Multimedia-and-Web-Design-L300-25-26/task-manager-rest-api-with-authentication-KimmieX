/*import mongoose from "mongoose";

// Create Task schema
// Fields:
// - title (String, required)
// - description (String)
// - completed (Boolean, default false)
// - owner (ObjectId, ref "User", required)
// - createdAt (default Date.now)

const taskSchema = new mongoose.Schema({
  
});

const Task = mongoose.model("Task", taskSchema);

export default Task;*/

// src/models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);