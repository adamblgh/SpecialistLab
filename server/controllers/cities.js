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