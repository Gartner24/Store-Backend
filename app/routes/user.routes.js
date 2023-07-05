import express from 'express';
import user from '../controllers/user.controllers.js';

const { getAllUsers, createUser } = user;

const userRoutes = express.Router();

// Rutas GET

//  (base path: /api/users)
userRoutes.get('/', getAllUsers);

//  Rutas POST

//  (base path: /api/users)
userRoutes.post('/', createUser);

//  Rutas PUT

//  (base path: /api/users)
// userRoutes.put('/:id', updateUser)

export default userRoutes;
