import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    accountID: {
      type: Number,
      required: true,
    },
    bankID: {
      type: Schema.Types.ObjectId,
      ref: "Bank",
    },
    loanID: {
      type: Schema.Types.ObjectId,
      ref: "Loan",
    },
    cardID: {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
    balanceID: {
      type: Schema.Types.ObjectId,
      ref: "Balance",
    },
    accountType: {
      type: String,
      unique: true,
      lowercase: true,
    },
    accountNumber: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export const Account = mongoose.model("Account", accountSchema);
