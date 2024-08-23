import { Router } from "express";
import { registerUser } from "../controllers/User.Controllers";

const router = Router();

router.route("/register").post(registerUser);

export default router;
