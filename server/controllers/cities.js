import mysql from "mysql";
import { configDB } from "../configDB.js";
 
const db=mysql.createConnection(configDB)

export const getCity=(request, response) =>{
    db.query('SELECT * FROM cities ORDER BY name',(err,result) =>{
        if(err){
            console.log('Hiba!',err)
        }
        else{
            response.send(result)
        }
    })
}

export const getCountId=(request,response)=>{
    const {id} = request.params
    let sql
    if(id==0){
        sql='SELECT COUNT(id) AS nr FROM subcategory'
    }
    else{
        sql='SELECT COUNT(id) AS nr FROM subcategory WHERE city_id = ?'
    }
    db.query(sql,[id],(err,result)=>{
        if(err){
            console.log('Hiba!',err)
        }
        else{
            response.send(result)
        }
    })
}