import { User } from "../models/user.Models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    dob,
    userName,
    password,
    avatar,
    accountID,
  } = req.body;

  // const { firstName, email, password } = req.body;

  console.log("Enter fullName: ", firstName);
  console.log("Enter email: ", email);
  console.log("Enter password: ", password);

  const user = await User.create({
    firstName,
    lastName,
    email,
    dob,
    userName,
    password,
    avatar,
    accountID,
  });

  const createdUser = await User.findById(user._id);

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfully"));
  // res.status(200).json({ message: "ok" });
});

export { registerUser };
