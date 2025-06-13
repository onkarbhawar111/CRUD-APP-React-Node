import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}, {versionKey: false})

export default mongoose.model("Users", userSchema)