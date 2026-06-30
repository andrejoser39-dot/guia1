const express = require('express');
const router = express.Router();

// Al requerir solo la carpeta, Node busca automáticamente el archivo index.js (nuestro barril)
const pqrsController = require('../controladores');

// Las rutas se quedan exactamente igual, pero ahora vienen de archivos separados
router.get('/', pqrsController.bienvenida);
router.get('/aprendices', pqrsController.gestionarAprendices);
router.get('/programas', pqrsController.consultarProgramas);

module.exports = router;