import { asyncHandler } from "../utils/asyncHandler.js";

const accountDetails = asyncHandler(async (req, res) => {
  const { accountNumber, accountype } = req.body;

  console.log(accountNumber, accountype);
});

export { accountDetails };
