const { Router } = require('express');
const ConsultaController = require('./app/controllers/ConsultaController');

const router = Router();

router.post('/consultas', ConsultaController.criarConsulta);
router.get('/consultas', ConsultaController.listarConsultas);
router.get('/consultas/:id', ConsultaController.listarConsultaPorId);

module.exports = router;
