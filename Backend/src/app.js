import express from "express";

const app = express();

//import Routes
import { userRouter } from "./models/User.Models.js";
import { accountRouter } from "../models/Accounts.Routes.js";

//Routes defined
app.use("/api/v1/users", userRouter);
app.use("/api/v1/account", accountRouter);
export { app };
