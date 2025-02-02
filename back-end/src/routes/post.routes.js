const express = require("express");
const {
  crearPost,
  editarPost,
  eliminarPost,
  obtenerPostsPorPyme, // Añade esta nueva función
} = require("../controllers/post.controller");
const {
  agregarComentario,
  eliminarComentario,
} = require("../controllers/comment.controller");

const router = express.Router();

// Ruta para crear un post --- POST
router.post("/posts", crearPost);

// Ruta para obtener todos los posts de una PYME -- GET
router.get("/posts/pyme/:pymeId", obtenerPostsPorPyme);

// Ruta para editar un post --PUT
router.put('/posts/:postId', editarPost);

// Ruta para eliminar un post --DELETE
router.delete('/posts/:postId', eliminarPost);

// Ruta para agregar un comentario a un post --- POST
router.post("/posts/:postId/comments", agregarComentario);

// Ruta para eliminar un comentario de un post -- DELETE
router.delete('/posts/:postId/comments/:commentId', eliminarComentario);



module.exports = router;
