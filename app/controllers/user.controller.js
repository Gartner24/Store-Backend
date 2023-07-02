// Controladores de usuarios
import user from '../models/user.model.js';

// Obtener todos los usuarios
const getAllUsers = (req, res, next) => {
	// Consulta a la base de datos
	user.getAllUsers((error, results) => {
		if (error) throw error;
		// Devolver el resultado de la consulta en formato JSON
		res.status(200).json(results);
	});
};

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

// Exportar los métodos del controlador
export default {
	getAllUsers,
    createUser,
};