import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully ");
  } catch (error) {
    throw new Error("Error connecting to Mongo db");
  }
};
