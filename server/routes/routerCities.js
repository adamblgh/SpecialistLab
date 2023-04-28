import express from "express";
import { getCity } from "../controllers/cities.js";
import { getCountId } from "../controllers/cities.js";
import { getCateg } from "../controllers/cities.js"
import { getSubCateg } from "../controllers/cities.js";
import { getOnclickSubCateg } from "../controllers/cities.js";
/*import { getSelectedSubcateg } from "../controllers/cities.js";*/

export const routerCities = express.Router();

routerCities.route("/").get(getCity);
routerCities.route("/countId/:id").get(getCountId);
routerCities.route("/categ").get(getCateg);
routerCities.route("/subcateg/:ctg").get(getSubCateg);
routerCities.route("/onclicksubcateg/:id").get(getOnclickSubCateg);
/*routerCities.route("/selectedsubcateg/:id").get(getSelectedSubcateg);*/
