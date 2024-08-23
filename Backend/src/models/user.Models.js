import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: Number,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    dob: {
      type: date,
      required: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String, //From cloudinary url
      required: true,
    },
    accountID: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
