import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  console.log("Enter fullName: ", fullName);
  console.log("Enter email: ", email);
  console.log("Enter password: ", password);
  // return res.status(200).json();

  res.status(200).json({ message: "Viraj K. Jadhav" });
});

export { registerUser };
