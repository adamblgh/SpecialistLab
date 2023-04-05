import express from "express";
import { adupload } from "../controllers/workers.js";


export const workersRouter = express.Router();

workersRouter.route("/adupload").post(adupload);
