import user from '../models/user.models.js'

//	GET -------------------------------------------------------------------------

const getAllUsers = (req, res, next) => {
	// Consulta a BD
	user.getAllUsers((error, results) => {
		if (error) throw error;
		// Devolver el resultado de la consulta en formato JSON
		res.status(200).json(results);
	});
};

//	POST -------------------------------------------------------------------------

const createUser = (req, res, next) => {
	const body = req.body;
	user.createUser(body, (error, result)=>{
		if(error) throw error;
		res.status(200).json(result)
	})
}

export default {
	getAllUsers,
	createUser
};
