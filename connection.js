import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export default async function connection() {
  await mongoose
    .connect(process.env.DATABASE_STR)
    .then((e) => console.log("MongoDB Connected..."))
    .catch((e) => {
      throw new Error(e);
    });
}
