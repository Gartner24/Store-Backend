import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import database from './config/db/database.js';
import router from './app/routes/index.routes.js';

dotenv.config()

const app = express();


// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Rutas de la aplicación
app.use('/api', router);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Listening in http://localhost:${PORT}`)
})
