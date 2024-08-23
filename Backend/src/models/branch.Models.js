import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({}, {});

export const Branch = mongoose.model("Branch", branchSchema);
