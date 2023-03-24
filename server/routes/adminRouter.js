import express from "express";
import {specialistlab} from "../controllers/admin.js"

export const adminRouter=express.Router();

adminRouter.route('/').get();