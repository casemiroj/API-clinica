const { v4: uuid } = require('uuid');
const moment = require('moment');

const dateFormat = 'DD/MM/YYYY - HH:mm';

class ConsultaController {
  criarConsulta(req, res) {
    const {
      paciente, idade, telefone, cpf, especialidade,
    } = req.body;

    const consulta = {
      id: uuid(),
      paciente,
      idade,
      telefone,
      cpf,
      especialidade,
      created_at: moment().format(dateFormat),
      updated_at: null,
      retorno: false,
    };

    res.json(consulta);
  }
}

module.exports = new ConsultaController();
