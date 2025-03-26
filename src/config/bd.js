import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,  // Nombre de la base de datos
    process.env.DB_USER,  // Usuario
    process.env.DB_PASSWORD,  // Contraseña
    {
        host: process.env.DB_HOST,  // Dirección de la base de datos
        dialect: 'mysql',  // Dialecto de la base de datos
        logging: false,  // Desactivar el logging (opcional)
    }
);

sequelize.authenticate()
    .then(() => console.log('Conexión con éxito.'))
    .catch(err => {
        console.error('No se pudo conectar con la base de datos:', err.message);
        console.error('Detalles:', err);
    });

export default sequelize;
