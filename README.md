![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# ToDo Application 📄💡

## Requisitos 🪛

* Node.js
* Git (opcional pero recomendado)
* Visual Studio Code (opcional pero recomendado)

## Instrucciones

1. Clonar el repositorio con Git:
   
   ```bash
   git clone https://github.com/EzeAGB/ToDoApp.git
   ```

## Instrucciones para ejecutar el frontend ▶️

1. Entrar a la carpeta del frontend. Ej.:
   
   ```bash
   cd ./frontend
   ```

2. Configurar el proyecto con _npm_ :
   
   ```bash
   npm i
   -o-
   npm install
   ```

3. Ejecutar el proyecto con:
   
   ```bash
   npm start
   ```

## Intrucciones para ejecutar el backend ▶️

1. Entrar a la carpeta del backend. Ej.:
   
   ```bash
   cd ./backend
   ```

2. Configurar el proyecto con _npm_ :
   
   ```bash
   npm i
   -o-
   npm install
   ```

3. Agregar un archivo _.env_ con el siguiente contenido:
   
   ```bash
   DB_NAME='nombre de la base de datos'
   DB_HOST='host de la base de datos'
   DB_PORT= número de puerto
   DB_USER='nombre de usuario'
   DB_PASSWORD='contraseña del usuario'
   ```

4. Ejecutar el proyecto con:
   
   ```bash
   npm start
   ```

## Desarrollo 🏗️

La API key por defecto es:

```bash
123456
```

Esta debe ser utilizada, por medio del header, en cada petición al backend. La llave del valor tiene que ser: "Authorization".

Ejemplo con Postman:

<img title="Example postman" src="https://i.imgur.com/MfzTTc4.png" alt="Postman">