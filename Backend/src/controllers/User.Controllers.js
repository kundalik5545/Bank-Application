import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, Email, Password } = req.body;
});

export { registerUser };
