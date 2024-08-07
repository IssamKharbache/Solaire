import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    plan: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
