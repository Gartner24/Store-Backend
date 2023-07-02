// Controladores de usuarios
import user from '../models/user.model.js';

// GET -------------------------------------------------------------

// Obtener todos los usuarios
const getAllUsers = (req, res, next) => {
	// Consulta a la base de datos
	user.getAllUsers((error, results) => {
		if (error) throw error;
		// Devolver el resultado de la consulta en formato JSON
		res.status(200).json(results);
	});
};

// Obtener un usuario por su id
const getUserById = (req, res, next) => {
    // Obtener el id del usuario
    const id = req.params.id;
    // Consulta a la base de datos
    user.getUserById(id, (error, results) => {
        if (error) throw error;
        // Devolver el resultado de la consulta en formato JSON
        res.status(200).json(results);
    });
}

// Obtener un usuario por su username
const getUserByUsername = (req, res, next) => {
    // Obtener el username del usuario
    const username = req.params.username;
    // Consulta a la base de datos
    user.getUserByUsername(username, (error, results) => {
        if (error) throw error;
        // Devolver el resultado de la consulta en formato JSON
        res.status(200).json(results);
    });
}

// POST -------------------------------------------------------------

// Crear un nuevo usuario
const createUser = (req, res, next) => {
    // Obtener el cuerpo de la petición
    const body = req.body;
    // Consulta a la base de datos
    user.createUser(body, (error, results) => {
        if (error) throw error;
        // Devolver el resultado de la consulta en formato JSON
        res.status(200).json(results);
    });
}

// DELETE -------------------------------------------------------------

// Eliminar un usuario
const deleteUser = (req, res, next) => {
    // Obtener el id del usuario
    const id = req.params.id;
    // Consulta a la base de datos
    user.deleteUser(id, (error, results) => {
        if (error) throw error;
        // Devolver el resultado de la consulta en formato JSON
        res.status(200).json(results);
    });
}

// PUT -------------------------------------------------------------
// Actualizar un usuario
const updateUser = (req, res, next) => {
    // Obtener el id del usuario
    const id = req.params.id;
    // Obtener el cuerpo de la petición
    const body = req.body;
    // Consulta a la base de datos
    user.updateUser(id, body, (error, results) => {
        if (error) throw error;
        // Devolver el resultado de la consulta en formato JSON
        res.status(200).json(results);
    });
}

// Exportar los métodos del controlador
export default {
	getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    getUserByUsername,
    updateUser
};