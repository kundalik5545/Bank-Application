import { Router } from "express";
import { accountDetails } from "../controllers/Accounts.Controllers.js";

const router = Router();

router.route("/accountDetails").post(accountDetails);

export default router;
