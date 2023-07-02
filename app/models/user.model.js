// Modela los datos de la tabla user de la base de datos que contiene id, username, password, email, role, created_at y updated_at.

// Importar módulos requeridos
import database from '../../config/db/database.js';

const { connection } = database;

// Obtener todos los usuarios
const getAllUsers = (callback) => {
    connection.query('SELECT * FROM users', callback);
}

// Crear un nuevo usuario
const createUser = (user, callback) => {
    connection.query('INSERT INTO users SET ?', [user], callback);
}

// Eliminar un usuario
const deleteUser = (id, callback) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], callback);
}

// Obtener un usuario por su id
const getUserById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
}

// Obtener un usuario por su username
const getUserByUsername = (username, callback) => {
    connection.query('SELECT * FROM users WHERE username = ?', [username], callback);
}

// Exportar los métodos del modelo (model)
export default {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    getUserByUsername
}
