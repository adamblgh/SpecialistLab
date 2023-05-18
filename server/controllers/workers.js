import mysql from "mysql";
import { configDB } from "../configDB.js";

const db=mysql.createConnection(configDB)

export const adupload=(request,response)=>{
    console.log(request.body)
    const {user_id,description,city_id,subcateg_id} = request.body
    console.log(user_id,description,city_id,subcateg_id)
       
        
            db.query('INSERT INTO workers (user_id,description,city_id,subcateg_id) values (?,?,?,?)',[user_id,description,city_id,subcateg_id],(err,result)=>{
                if(err){
                    console.log('HIBA AZ INSERT-NÉL!',err)
                    response.send({msg:'Sikertelen feltöltés!'})
                
                }
                else
                    response.send({msg:'Sikeres feltöltés!'})
            })
        }
