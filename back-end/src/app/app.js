/// definimos la estructura básica de express

const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

const router = require("../routes/user.routes");
const postRoutes = require("../routes/post.routes");
const { login } = require("../controllers/user.login.controller");

const app = express();

//definimos los middlewares propios que va a utlizar express
app.use(morgan("dev")); // para ver las peticiones que se hacen al servidor, viene de la dependencia morgan
app.use(express.json()); // para que express entienda los datos que vienen en formato json
app.use(cors());
app.use(express.urlencoded({ extended: false })); // para que express entienda los datos que vienen en formato urlencoded
app.use(bodyParser.json());

// Servir archivos estáticos
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// definimos las rutas de la aplicación
app.use("/api/users", router); // definimos la ruta base para las rutas de usuario
app.use("/api", postRoutes); // Ruta base para las rutas de posts y comentarios


module.exports = app;