const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const ConsultaController = require('./app/controllers/ConsultaController');
const swaggerDocument = require('./swagger.json');

const router = Router();

router.post('/consultas', ConsultaController.criarConsulta);
router.get('/consultas', ConsultaController.listarConsultas);
router.get('/consultas/:id', ConsultaController.listarConsultaPorId);
router.put('/consultas/:id', ConsultaController.atualizarConsulta);
router.patch('/consultas/retorno/:id', ConsultaController.retornoConsulta);
router.delete('/consultas/:id', ConsultaController.deleteConsulta);
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
