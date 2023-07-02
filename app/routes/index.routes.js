import express from 'express';
import userRoutes from './user.routes.js';

const router = express.Router();

// ruta principal de la API (base path: /api)

router.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a mi aplicación',
        routes: [
        {
            path: '/api/users',
            description: 'Ruta para obtener todos los usuarios',
        },
        {
            path: '/api/users/:id',
            description: 'Ruta para obtener un usuario por ID',
        },
        ],
    });
});

// Rutas para los usuarios (base path: /api/users)
router.use('/users', userRoutes);


export default router;