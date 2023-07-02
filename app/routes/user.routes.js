import express from 'express';
import user from '../controllers/user.controller.js';

// user.controller
const { getAllUsers, createUser } = user;

const userRoutes = express.Router();

// Rutas GET

// Rutas para los usuarios (base path: /api/users)
userRoutes.get('/', getAllUsers);

// Rutas POST (base path: /api/users)
userRoutes.post('/', createUser);

export default userRoutes;