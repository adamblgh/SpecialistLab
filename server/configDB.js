import * as dotenv from 'dotenv';
dotenv.config();

export const configDB={
        host     : process.env.MYSQL_HOST || 'localhost',
        user     : process.env.MYSQL_USERNAME || 'root',
        password : process.env.MYSQL_PASSWORD || '',
        database : process.env.MYSQL_DATABASE || 'specialistlab'
}
console.log(configDB.database)