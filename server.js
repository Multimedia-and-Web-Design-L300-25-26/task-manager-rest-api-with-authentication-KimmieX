// server.js
import dotenv from "dotenv";
import app from "./src/app.js";
import mongoose from "mongoose";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    // No options needed for Mongoose 7+
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});