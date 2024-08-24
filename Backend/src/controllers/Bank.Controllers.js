import { asyncHandler } from "../utils/asyncHandler.js";

const createBank = asyncHandler(async (req, res) => {
  console.log("Bank Controllers");
});

export { createBank };
