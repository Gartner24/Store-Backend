import mysql from 'mysql';
import dotenv from 'dotenv';


dotenv.config()

// Crear conexion con la base de datos
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

// Prueba de conexion
connection.connect((err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Conection to database succesfull');
});

const database = {
	connection,
};

export default database
