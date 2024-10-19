// controllers/deleteUser.js

const Coach = require("../models/user.coach.model");
const Pyme = require("../models/user.pyme.model");

const deleteUser = async (req, res) => {
  const { id } = req.params; // Obtener el ID del usuario a eliminar desde los parámetros de la ruta
  const { userType } = req.body;

  try {
    // Verificar y eliminar el usuario según su tipo
    let deletedUser;
    if (userType === 'coach') {
      deletedUser = await Coach.findByIdAndDelete(id);
    } else if (userType === 'pyme') {
      deletedUser = await Pyme.findByIdAndDelete(id);
    } else {
      return res.status(400).json({
        message: "Tipo de usuario inválido",
        status: 400,
        error: true,
      });
    }

    // Manejar caso de usuario no encontrado

    res.status(200).json({
      message: "Usuario eliminado con éxito",
      status: 200,
      error: false,
      data: {
        id: deletedUser._id,
        fullName: deletedUser.fullName,
        email: deletedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar eliminar el usuario",
      status: 500,
      error: true,
    });
    console.log(error);
  }
};

module.exports = deleteUser;