import { Router } from "express";
import { createBank } from "../controllers/Bank.Controllers.js";

const router = Router();

router.route("/createBank").post(createBank);

export default router;
