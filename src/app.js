import express from 'express';
import usersRoutes from './routes/usersRoutes.js';  // Asegúrate de que el archivo esté en la ruta correcta

const app = express();

app.use(express.json());  // Si usas bodyParser o express, debes indicar que los cuerpos sean parseados

// Rutas
app.use('/api/users', usersRoutes);

// Inicia el servidor en el puerto

export default app;

