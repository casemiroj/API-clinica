const { Router } = require('express');
const ConsultaController = require('./controllers/ConsultaController');

const router = Router();

router.post('/consultas', ConsultaController.criarConsulta);

module.exports = router;
