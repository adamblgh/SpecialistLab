import express from "express";
import { getCity } from "../controllers/cities.js";
import { getCountId } from "../controllers/cities.js";
/*import { getCateg } from "../controllers/cities.js";*/
import { getSubCateg } from "../controllers/cities.js";

export const routerCities = express.Router();

routerCities.route("/").get(getCity);
routerCities.route("/countId/:id").get(getCountId);
/*routerCities.route("/categ/:ctg").get(getCateg);*/
routerCities.route("/subcateg/:ctg").get(getSubCateg);
