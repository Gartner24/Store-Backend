import express from 'express';
import userRoutes from './user.routes.js';

const router = express.Router();

// Ruta principal (base path /api)
router.get('/', (req, res) => {
	res.json({
		message: 'Bienvenidos a mi aplicacion',
		routes: [
			{
				path: '/api/users',
				description: ' Rutas para obtener todos los usuarios',
			},
		],
	});
});

// Rutas para los usuarios (base path: /api/users)
router.use('/users', userRoutes)

export default router;
