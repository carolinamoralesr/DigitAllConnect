const mongoose = require("mongoose");
const Post = require("../models/post.model");
const Pyme = require("../models/user.pyme.model");

// Controlador para crear un post
const crearPost = async (req, res) => {
  const { title, content, pymeId } = req.body;

  // Validar que los campos no estén vacíos
  if (!title || !content || !pymeId) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
      status: 400,
      error: true,
    });
  }

  try {
    // Verificar que la Pyme exista
    const pyme = await Pyme.findById(pymeId);
    if (!pyme) {
      return res.status(404).json({
        message: "Pyme no encontrada",
        status: 404,
        error: true,
      });
    }

    // Crear el post
    const nuevoPost = new Post({
      title,
      content,
      pymeId,
    });

    const postCreado = await nuevoPost.save();

    res.status(201).json({
      message: "Post creado con éxito",
      status: 201,
      error: false,
      data: postCreado,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar crear el post",
      status: 500,
      error: true,
    });
    console.log(error);
  }
};

// Controlador para editar un post
const editarPost = async (req, res) => {
  const { postId } = req.params;
  const { title, content, pymeId } = req.body;

  // Validar que postId es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).json({
      message: "ID de post no válido",
      status: 400,
      error: true,
    });
  }

  try {
    // Verificar que el post exista
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({
        message: "Post no encontrado",
        status: 404,
        error: true,
      });
    }

    // Verificar que la Pyme exista si pymeId está presente
    if (pymeId) {
      const pyme = await Pyme.findById(pymeId);
      if (!pyme) {
        return res.status(404).json({
          message: "Pyme no encontrada",
          status: 404,
          error: true,
        });
      }
      post.pymeId = pymeId;
    }

    // Actualizar solo los campos proporcionados
    if (title) post.title = title;
    if (content) post.content = content;

    const postActualizado = await post.save();

    res.status(200).json({
      message: "Post actualizado con éxito",
      status: 200,
      error: false,
      data: postActualizado,
    });
  } catch (error) {
    console.error("Error al editar el post:", error); // Log detallado del error
    res.status(500).json({
      message: "Error en el servidor al intentar editar el post",
      status: 500,
      error: true,
      details: error.message, // Añadir detalles del error al response
    });
  }
};

// Controlador para eliminar un post
const eliminarPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const postEliminado = await Post.findByIdAndDelete(postId);

    if (!postEliminado) {
      return res.status(404).json({
        message: "Post no encontrado",
        status: 404,
        error: true,
      });
    }

    res.status(200).json({
      message: "Post eliminado con éxito",
      status: 200,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar eliminar el post",
      status: 500,
      error: true,
    });
    console.log(error);
  }
};

//obtener post pymes
const obtenerPostsPorPyme = async (req, res) => {
  const { pymeId } = req.params;

  try {
    const posts = await Post.find({ pymeId }).sort({ createdAt: -1 });
    res.status(200).json({
      message: "Posts obtenidos con éxito",
      status: 200,
      error: false,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar obtener los posts",
      status: 500,
      error: true,
    });
    console.log(error);
  }
};


module.exports = {
  crearPost,
  editarPost,
  eliminarPost,
  obtenerPostsPorPyme
};