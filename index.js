const express = require('express');
const rutas = require('./rutas/ruta');

const app = express();
const PORT = 4000;


app.use(express.static('public'));

app.use(express.urlencoded ({
    extended: true
}));

app.use ('/' , rutas);


app.listen (PORT , () => console.log ("Servidor en el Puerto 4000"));