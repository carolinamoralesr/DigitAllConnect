

const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento para diferentes tipos de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath;
    if (file.fieldname === 'avatar') {
      uploadPath = 'src/uploads/avatars';
    } else if (file.fieldname === 'certification' || file.fieldname === 'formation') {
      uploadPath = 'src/uploads/documents';
    } else {
      return cb(new Error('Invalid field name'), false);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Filtros de archivos
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'avatar') {
    const fileTypes = /jpeg|jpg|png/;
    const mimeType = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extName) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no válido para avatar. Sólo se permiten jpeg, jpg y png.'), false);
    }
  } else if (file.fieldname === 'certification' || file.fieldname === 'formation') {
    if (file.mimetype === 'application/pdf' && path.extname(file.originalname).toLowerCase() === '.pdf') {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no válido para certificación o formación. Sólo se permite pdf.'), false);
    }
  } else {
    cb(new Error('Invalid field name'), false);
  }
};

// Middleware para cargar archivos
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;



