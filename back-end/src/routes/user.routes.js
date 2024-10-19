
const express = require("express");
const router = express.Router();

const { crearUsuario, listarPymes, obtenerCoach, listarCoaches, obtenerPyme } = require("../controllers/user.controller");
const upload = require("../config/multer.config");
const { login } = require("../controllers/user.login.controller");

const editUser = require("../controllers/user.edit");
const deleteUser = require("../controllers/user.delete");


// Ruta para crear un usuario y poder subir foto con pdfs
router.post(
  "/crear-usuario",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "certification", maxCount: 1 },
    { name: "formation", maxCount: 1 },
  ]),
  crearUsuario
);

//Ruta para login
router.post("/login", login);

// Ruta para editar un usuario
router.put(
  "/editar-usuario/:id",
  upload.fields([
    { name: "avatar" },
    { name: "certification" },
    { name: "formation" },
  ]),
  editUser
);

// Ruta para obtener los datos de una Pyme por su ID
router.get('/pyme/:id', obtenerPyme);
// Ruta para obtener los datos de un Coach por su ID 
router.get('/coach/:id', obtenerCoach);

// Ruta para borrar un usuario
router.delete("/eliminar-usuario/:id", deleteUser);


// Ruta para obtener los datos de un coach por su ID
router.get('/coach/:id', obtenerCoach);

// Ruta para listar usuarios tipo Pyme
router.get("/listar-pymes", listarPymes);

// Ruta para listar usuarios tipo COACH
router.get("/listar-coaches", listarCoaches);


module.exports = router;
