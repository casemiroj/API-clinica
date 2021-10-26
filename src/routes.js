const { Router } = require('express');
const ConsultaController = require('./app/controllers/ConsultaController');

const router = Router();

router.post('/consultas', ConsultaController.criarConsulta);

module.exports = router;
