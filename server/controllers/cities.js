import { response } from "express";
import mysql from "mysql";
import { configDB } from "../configDB.js";

const db = mysql.createConnection(configDB);

export const getCity = (request, response) => {
  db.query("SELECT * FROM cities ORDER BY name", (err, result) => {
    if (err) {
      console.log("Hiba!", err);
    } else {
      response.send(result);
    }
  });
};

export const getCountId = (request, response) => {
  const { id } = request.params;
  let sql;
  if (id == 0) {
    sql = "SELECT COUNT(id) AS nr FROM subcategory";
  } else {
    sql = "SELECT COUNT(id) AS nr FROM subcategory WHERE city_id = ?";
  }
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Hiba!", err);
    } else {
      response.send(result);
    }
  });
};

export const getCateg = (request, response) => {
  let sql1;
    sql1 = "SELECT * FROM category";
  db.query(sql1,(error, results) => {
    if (error) {
      console.log("Hiba!", error);
    } else {
      response.send(results);
    }
  });
}

export const getSubCateg = (request, response) => {
  let sql2;
  let { ctg } = request.params;
  if (ctg == 0) {
    sql2 =
      "SELECT id,subcategory.description FROM subcategory ORDER BY description";
  } else {
    sql2 =
      "SELECT id,subcategory.description FROM subcategory,category WHERE category.id=subcategory.categ_id AND subcategory.id=?";
  }
  db.query(sql2, [ctg], (error, results) => {
    if (error) {
      console.log("Hiba!", error);
    } else {
      response.send(results);
    }
  });
};

export const getOnclickSubCateg = (request, response) => {
  const { id } = request.params;
  db.query("SELECT subcategory.description FROM subcategory,category WHERE category.id=subcategory.categ_id AND categ_id=?",[id],(error, results) => {
      if (error) {
        console.log("Hiba!", error);
      } else {
        response.send(results);
      }
  });
};

export const getDateFromSubCateg = (request,response) => {
  const { id } = request.params
  db.query("SELECT datum FROM subcategory WHERE id=?",[id],(error,results)=>{
    if(error){
      console.log("Hiba!",error)
    }
    else{
      response.send(results)
    }
  })
}
