import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({}, {});

export const Loan = mongoose.model("Loan", loanSchema);
