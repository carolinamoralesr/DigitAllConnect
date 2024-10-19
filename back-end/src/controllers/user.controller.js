
// controllers/user.controller.js
const bcrypt = require("bcrypt");
const Pyme = require("../models/user.pyme.model");
const Coach = require("../models/user.coach.model");



// Controlador para crear un usuario (Pyme o Coach)
const crearUsuario = async (req, res) => {
  const {
    userType,
    fullName,
    rut,
    region,
    email,
    password,
    gender,
    birthdate,
    nameCompany,
    improvement,
    descriptionPyme,
    specialization,
    experience,
    disponibility,
    descriptionCoach,
  } = req.body;

  // Validar que los campos no estén vacíos
  if (
    !fullName ||
    !rut ||
    !region ||
    !email ||
    !password ||
    !gender ||
    !birthdate
  ) {
    return res.status(400).json({
      message: "Todos los campos son obligatorios",
      status: 400,
      error: true,
    });
  }

  try {
    // Validación de email único
    let usuarioExistente;
    if (userType === "pyme") {
      usuarioExistente = await Pyme.findOne({ email });
    } else if (userType === "coach") {
      usuarioExistente = await Coach.findOne({ email });
    } else {
      return res.status(400).json({
        message: "Tipo de usuario inválido",
        status: 400,
        error: true,
      });
    }

    if (usuarioExistente) {
      return res.status(400).json({
        message: "El email ya está registrado",
        status: 400,
        error: true,
      });
    }

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    const passwordEncriptada = bcrypt.hashSync(password, salt);

    // Obtener la URL de los archivos subidos
    const avatarUrl =
      req.files && req.files["avatar"]
        ? `/uploads/avatars/${req.files["avatar"][0].filename}`
        : "";
    const certificationUrl =
      req.files && req.files["certification"]
        ? `/uploads/documents/${req.files["certification"][0].filename}`
        : "";
    const formationUrl =
      req.files && req.files["formation"]
        ? `/uploads/documents/${req.files["formation"][0].filename}`
        : "";

    let usuarioCreado;
    if (userType === "pyme") {
      usuarioCreado = await Pyme.create({
        fullName,
        rut,
        region,
        email,
        password: passwordEncriptada,
        gender,
        birthdate,
        active: true,
        avatar: avatarUrl,
        nameCompany,
        improvement,
        descriptionPyme,
      });
    } else if (userType === "coach") {
      usuarioCreado = await Coach.create({
        fullName,
        rut,
        region,
        email,
        password: passwordEncriptada,
        gender,
        birthdate,
        active: true,
        avatar: avatarUrl,
        specialization,
        experience,
        certification: certificationUrl,
        formation: formationUrl,
        disponibility,
        descriptionCoach,
      });
    }

    res.status(201).json({
      message: "Usuario creado con éxito",
      status: 201,
      error: false,
      data: {
        id: usuarioCreado._id,
        fullName: usuarioCreado.fullName,
        email: usuarioCreado.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar crear el usuario",
      status: 500,
      error: true,
    });
    console.error(error);
  }
};


// Controlador para obtener los datos de un coach por su ID
const obtenerCoach = async (req, res) => {
  const { id } = req.params;

  try {
    const coach = await Coach.findById(id);

    if (!coach) {
      return res.status(404).json({

        message: 'Coach no encontrado',

        status: 404,
        error: true,
      });
    }

    res.status(200).json({

      message: 'Coach encontrado con éxito',

      status: 200,
      error: false,
      data: coach,
    });
  } catch (error) {
    res.status(500).json({

      message: 'Error en el servidor al intentar obtener el coach',

      status: 500,
      error: true,
    });
    console.error(error);
  }
};


// Controlador para obtener los datos de un pyme por su ID
const obtenerPyme = async (req, res) => {
  const { id } = req.params;

  try {
    const pyme = await Pyme.findById(id);

    if (!pyme) {
      return res.status(404).json({
        message: "Pyme no encontrado",
        status: 404,
        error: true,
      });
    }

    res.status(200).json({
      message: "Pyme encontrado con éxito",
      status: 200,
      error: false,
      data: pyme,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar obtener el pyme",
      status: 500,
      error: true,
    });
    console.error(error);
  }
};


// Controlador para listar los usuarios tipo Pyme
const listarPymes = async (req, res) => {
  try {
    const pymes = await Pyme.find({}, "avatar nameCompany descriptionPyme");
    res.status(200).json({
      message: "Pymes listadas con éxito",
      status: 200,
      error: false,
      data: pymes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar listar las pymes",
      status: 500,
      error: true,
    });
    console.error(error);
  }
};

// Controlador para listar los usuarios tipo Coach
const listarCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find({}, "avatar fullName specialization disponibility");
    res.status(200).json({
      message: "Coaches listados con éxito",
      status: 200,
      error: false,
      data: coaches,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar listar los coaches",
      status: 500,
      error: true,
    });
    console.error(error);
  }
};

module.exports = {
  crearUsuario,
  obtenerCoach,
  listarPymes, //controlador que faltaba
  listarCoaches,
  obtenerPyme// nuevo controlador añadido listo


};
