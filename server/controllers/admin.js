import mysql from "mysql";
import { configDB } from "../configDB.js";
const db=mysql.createConnection(configDB)

export const specialistlab=(request,response)=>{
    db.query('SELECT * FROM specialistlab ORDER BY users',(err,result)=>{
        if(err){
            console.log('HIBA!',err)
        }
        else{
            response.send(result)
        }
    })
}