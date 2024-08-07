import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to the database successfully ");
  } catch (error) {
    throw new Error("Error connecting to Mongo db");
  }
};
