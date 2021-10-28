const { Router } = require('express');
const ConsultaController = require('./app/controllers/ConsultaController');

const router = Router();

router.post('/consultas', ConsultaController.criarConsulta);
router.get('/consultas', ConsultaController.listarConsultas);
router.get('/consultas/:id', ConsultaController.listarConsultaPorId);
router.put('/consultas/:id', ConsultaController.atualizarConsulta);
router.patch('/consultas/retorno/:id', ConsultaController.retornoConsulta);

module.exports = router;
