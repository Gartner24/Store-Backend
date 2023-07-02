// Modela los datos de la tabla user de la base de datos que contiene id, username, password, email, role, created_at y updated_at.

// Importar módulos requeridos
import database from '../../config/db/database.js';

const { connection } = database;

// Obtener todos los usuarios
const getAllUsers = (callback) => {
    connection.query('SELECT * FROM users', callback);
}

const createUser = (user, callback) => {
    connection.query('INSERT INTO users SET ?', [user], callback);
}

// Exportar los métodos del modelo
export default {
    getAllUsers,
    createUser,
}