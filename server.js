const express = require('express');

const app = express();
const path = require('path');
const dotenv = require('dotenv');

// Configuracion para el uso del .env
dotenv.config();

// Middleware para procesar archivos estáticos en la carpeta public
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de la plantilla Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Configuracion de las rutas de la pagina
const router = require('./routes/routes');
app.use('/', router);


// Puerto en el que escucha el servidor 
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});