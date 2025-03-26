# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el codigo fuente al contenedor
COPY . .

# Exponer el puerto en el que corre el servicio
EXPOSE 3000

# Comando para iniciar el servicio
CMD ["node", "index.js"]

