const { Router } = require('express');
const ConsultaController = require('./app/controllers/ConsultaController');

const router = Router();

router.get('/', (req, res) => {
  res.send('Olá');
});
router.post('/consultas', ConsultaController.criarConsulta);
router.get('/consultas', ConsultaController.listarConsultas);
router.get('/consultas/:id', ConsultaController.listarConsultaPorId);
router.put('/consultas/:id', ConsultaController.atualizarConsulta);
router.patch('/consultas/retorno/:id', ConsultaController.retornoConsulta);
router.delete('/consultas/:id', ConsultaController.deleteConsulta);

module.exports = router;
