const Coach = require("../models/user.coach.model");
const Pyme = require("../models/user.pyme.model");
const bcrypt = require("bcrypt");


const editUser = async (req, res) => {
  const { id } = req.params;
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
    descriptionCoach
  } = req.body;

// Depurar el cuerpo de la solicitud
console.log('req.body:', req.body);
console.log('req.files:', req.files);
console.log('Valor recibido para userType:', userType);

  try {
    // Validar que el ID sea válido (si es necesario)
    if (!id) {
      return res.status(400).json({
        message: "ID de usuario no proporcionado",
        status: 400,
        error: true,
      });
    }

    let editedUser;
    if (userType === 'coach') {
      editedUser = await Coach.findById(id);
    } else if (userType === 'pyme') {
      editedUser = await Pyme.findById(id);
    } else {
      return res.status(400).json({
        message: "Tipo de usuario inválido",
        status: 400,
        error: true,
      });
    }

    if (!editedUser) {
      return res.status(404).json({
        message: "Usuario no encontrado",
        status: 404,
        error: true,
      });
    }

    // Encriptar contraseña si se proporciona una nueva
    if (password) {
      const salt = bcrypt.genSaltSync();
      editedUser.password = bcrypt.hashSync(password, salt);
    }

    // Obtener la URL de los archivos subidos y eliminar los antiguos si se suben nuevos
    if (req.files && req.files['avatar']) {
      // Eliminar el antiguo avatar si es necesario
      if (editedUser.avatar) {
        // Lógica para eliminar el archivo antiguo
      }
      editedUser.avatar = `/uploads/avatars/${req.files['avatar'][0].filename}`;
    }

    if (req.files && req.files['certification']) {
      // Eliminar la antigua certificación si es necesario
      if (editedUser.certification) {
        // Lógica para eliminar el archivo antiguo
      }
      editedUser.certification = `/uploads/documents/${req.files['certification'][0].filename}`;
    }

    if (req.files && req.files['formation']) {
      // Eliminar la antigua formación si es necesario
      if (editedUser.formation) {
        // Lógica para eliminar el archivo antiguo
      }
      editedUser.formation = `/uploads/documents/${req.files['formation'][0].filename}`;
    }

    // Actualizar otros campos
    editedUser.fullName = fullName || editedUser.fullName;
    editedUser.rut = rut || editedUser.rut;
    editedUser.region = region || editedUser.region;
    editedUser.email = email || editedUser.email;
    editedUser.gender = gender || editedUser.gender;
    editedUser.birthdate = birthdate || editedUser.birthdate;

    if (userType === 'pyme') {
      editedUser.nameCompany = nameCompany || editedUser.nameCompany;
      editedUser.improvement = improvement || editedUser.improvement;
      editedUser.descriptionPyme = descriptionPyme || editedUser.descriptionPyme;
    } else if (userType === 'coach') {
      editedUser.specialization = specialization || editedUser.specialization;
      editedUser.experience = experience || editedUser.experience;
      editedUser.disponibility = disponibility || editedUser.disponibility;
      editedUser.descriptionCoach = descriptionCoach || editedUser.descriptionCoach;
    }

    await editedUser.save();

    res.status(200).json({
      message: "Usuario editado con éxito",
      status: 200,
      error: false,
      data: {
        id: editedUser._id,
        fullName: editedUser.fullName,
        email: editedUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al intentar editar el usuario",
      status: 500,
      error: true,
    });
    console.error(error);
  }
};

module.exports = editUser;
