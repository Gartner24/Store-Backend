import express from 'express';
import dotenv from 'dotenv';
import database from './config/db/database.js'
import morgan from 'morgan';
import router from './app/routes/index.routes.js';
import cors from 'cors';

// Se inicializa el dotenv
dotenv.config();

// Se inicializa la app
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configuracion de CORS
app.use(cors())

// Rutas
app.use('/api', router)

// Se inicializa el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Listening in http://localhost:${PORT}`)
})
