import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({}, {});

export const Bank = mongoose.model("Bank", bankSchema);
