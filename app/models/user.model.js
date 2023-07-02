// Modela los datos de la tabla user de la base de datos que contiene id, username, password, email, role, created_at y updated_at.

// Importar módulos requeridos
import database from '../../config/db/database.js';

const { connection } = database;


// GET -------------------------------------------------------------

// Obtener todos los usuarios
const getAllUsers = (callback) => {
    connection.query('SELECT * FROM users', callback);
}

// Obtener un usuario por su id
const getUserById = (id, callback) => {
    connection.query('SELECT * FROM users WHERE userID = ?', [id], callback);
}

// Obtener un usuario por su username
const getUserByUsername = (username, callback) => {
    connection.query('SELECT * FROM users WHERE username = ?', [username], callback);
}

// POST -------------------------------------------------------------

// Crear un nuevo usuario
const createUser = (user, callback) => {
    connection.query('INSERT INTO users SET ?', [user], callback);
}

// DELETE -------------------------------------------------------------

// Eliminar un usuario
const deleteUser = (id, callback) => {
    connection.query('DELETE FROM users WHERE userID = ?', [id], callback);
}

// PUT -------------------------------------------------------------

// Actualizar un usuario
const updateUser = (id, user, callback) => {
    connection.query('UPDATE users SET ? WHERE userID = ?', [user, id], callback);
}

// Exportar los métodos del modelo (model)
export default {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    getUserByUsername,
    updateUser
}
