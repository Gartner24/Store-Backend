import database from '../../config/db/database.js';

const { connection } = database;

//  GET -------------------------------------------------------------------------

// Obtener todos los usuarios
const getAllUsers = (callback) => {
	connection.query('SELECT * FROM users', callback);
};

// POST -------------------------------------------------------------------------

// Crear un nuevo usuario
const createUser = (user, callback) => {
    connection.query('INSERT INTO users SET ?', [user], callback);
}

export default {
	getAllUsers,
	createUser,
};
