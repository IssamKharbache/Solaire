import User from "@/models/User";
import { connectDb } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { email, password, fullName } = await req.json();

  await connectDb();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("Email already in use", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = await new User({
    email,
    password: hashedPassword,
    fullName,
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
