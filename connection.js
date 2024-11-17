import mongoose from "mongoose";

export default async function connection() {
  await mongoose
    .connect(
      "mongodb+srv://varun:varun123@filenow.zqt8i.mongodb.net/?retryWrites=true&w=majority&appName=filenow"
    )
    .then((e) => console.log("MongoDB Connected..."))
    .catch((e) => {
      throw new Error(e);
    });
}
