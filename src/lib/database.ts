import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: process.env.NODE_ENV === "production" ? "task-manager" : "task-manager-dev",
    });
    console.log("Connected to database successfully.");
  } catch (error) {
    console.error("Database connection error: ", error);
    throw new Error("Database connection failed");
  }
};
