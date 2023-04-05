import mysql from "mysql";
import { configDB } from "../configDB.js";

const db=mysql.createConnection(configDB)

export const adupload=(request,response)=>{
    console.log(request.body)
    const {user_id,about_me,subcateg_id,contact} = request.body
    console.log(user_id,about_me,subcateg_id,contact)
       
        
            db.query('INSERT INTO workers (user_id,about_me,subcateg_id,contact) values (?,?,?,?)',[user_id,about_me,subcateg_id,contact],(err,result)=>{
                if(err){
                    console.log('HIBA AZ INSERT-NÉL!',err)
                    response.send({msg:'Sikertelen feltöltés!'})
                
                }
                else
                    response.send({msg:'Sikeres feltöltés!'})
            })
        }
