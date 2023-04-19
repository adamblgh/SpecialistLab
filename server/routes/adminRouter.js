import express from "express";
import { getUsers } from "../controllers/admin.js";
import { addCategory } from "../controllers/admin.js";
import { delCategory } from "../controllers/admin.js";
import { delUser } from "../controllers/admin.js";
import { updateUser } from "../controllers/admin.js";

export const adminRouter=express.Router();

adminRouter.route('/').get(getUsers);
adminRouter.route('/addCategory').post(addCategory);
adminRouter.route('/delCategory/:id').delete(delCategory);
adminRouter.route('/delete/:id').delete(delUser);
adminRouter.route('/update').post(updateUser);
