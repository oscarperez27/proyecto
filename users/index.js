import dotenv from "dotenv";
import app from "./src/app.js";
import sequelize from "./src/config/bd.js"; 

dotenv.config();

const PORT = process.env.PORT_EXPRESS || 3012;  

// Sincroniza la base de datos y luego inicia el servidor
sequelize.sync().then(() => {
    console.log("Base de datos sincronizada correctamente.");
    app.listen(PORT, () => {
        console.log(`Servicio corriendo en el puerto ${PORT}`);
    });
}).catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
});

