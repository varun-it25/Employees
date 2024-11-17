import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    s_no : Number
}, {versionKey: false})

const userModel = mongoose.model("auths", userSchema)

export default userModel