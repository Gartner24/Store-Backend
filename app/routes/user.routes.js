import express from 'express';
import user from '../controllers/user.controller.js';

// user.controller
const { getAllUsers, createUser, deleteUser, getUserById, getUserByUsername } = user;

const userRoutes = express.Router();

// Rutas GET

// Rutas para los usuarios (base path: /api/users)
userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUserById);
userRoutes.get('/username/:username', getUserByUsername);

// Rutas POST (base path: /api/users)
userRoutes.post('/', createUser);

// Rutas DELETE (base path: /api/users)
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
