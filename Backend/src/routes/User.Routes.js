import { Router } from "express";
import { registerUser } from "../controllers/User.Controllers.js";

const router = Router();

router.route("/register").post(registerUser);
// router.route("/login").get(loginUser);
// router.route("/logout").post(logoutUser);

export default router;
