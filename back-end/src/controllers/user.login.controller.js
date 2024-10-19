const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Coach = require("../models/user.coach.model");
const Pyme = require("../models/user.pyme.model");
const { SECRET_KEY } = require("../config/config"); // Asegúrate de tener tu clave secreta en un archivo de configuración

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "El email y la contraseña son obligatorios",
      status: 400,
      error: true,
    });
  }

  try {
    // Buscar usuario Coach por email
    let user = await Coach.findOne({ email });
    let userType = "coach";

    // Si no es un Coach, buscar usuario Pyme
    if (!user) {
      user = await Pyme.findOne({ email });
      userType = "pyme";
    }

    // Si no se encuentra ningún usuario con ese email
    if (!user) {
      return res.status(404).json({ error: "Email no registrado" });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    // Generar token JWT
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        userType: userType, // Incluir el tipo de usuario en el token
      },
      SECRET_KEY, // Clave secreta para firmar el token
      { expiresIn: "1h" } // Opcional: Tiempo de expiración del token
    );

    // Devolver los datos del usuario autenticado junto con el token
    res.status(200).json({
      message: "Usuario logueado con éxito",
      status: 200,
      error: false,
      token: token, // Incluir el token en la respuesta
      data: {
        userId: user._id,
        email: user.email,
        fullName: user.fullName, // Ajusta según tu modelo de usuario
        userType: userType, // Incluir el tipo de usuario en la respuesta
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = {
  login,
};
