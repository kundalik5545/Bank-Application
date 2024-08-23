import { Router } from "express";
import { accountDetails } from "../controllers/Accounts.Controller";

const router = Router();

router.route("/accountDetails").get(accountDetails);

export default router;
