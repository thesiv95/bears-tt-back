import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();


const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: +process.env.DB_PORT!,
	database: process.env.DB_NAME
});


export default connection;