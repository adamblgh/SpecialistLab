import express from "express";
import { getUsers } from "../controllers/admin.js";
import { addUser } from "../controllers/admin.js";
import { delUser } from "../controllers/admin.js";
import { updateUser } from "../controllers/admin.js";

export const adminRouter=express.Router();

adminRouter.route('/').get(getUsers);
adminRouter.route('/add').post(addUser);
adminRouter.route('/delete/:id').delete(delUser);
adminRouter.route('/update/:id').put(updateUser);
