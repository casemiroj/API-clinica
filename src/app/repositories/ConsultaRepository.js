const { v4: uuid } = require('uuid');
const Consulta = require('../models/Consulta');

class ConsultaRepository {
  async create({
    paciente, idade, telefone, cpf, especialidade,
  }) {
    const consulta = {
      id: uuid(),
      paciente,
      idade,
      telefone,
      cpf,
      especialidade,
      created_at: new Date(),
      updated_at: null,
      retorno: false,
    };

    await Consulta.create(consulta);

    return consulta;
  }
}

module.exports = new ConsultaRepository();
