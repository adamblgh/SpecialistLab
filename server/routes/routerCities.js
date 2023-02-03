import express from "express";
import {getCity} from "../controllers/cities.js"
import { getCountId } from "../controllers/cities.js";

export const routerCities=express.Router();

routerCities.route('/').get(getCity);
routerCities.route('/countId/:id').get(getCountId);

