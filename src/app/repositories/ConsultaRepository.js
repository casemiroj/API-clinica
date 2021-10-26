const Consulta = require('../models/Consulta');

class ConsultaRepository {
  async create({
    paciente, idade, telefone, cpf, especialidade,
  }) {
    const consulta = {
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

  async findAll() {
    const consultas = await Consulta.find();

    return consultas;
  }

  async findById(id) {
    const consulta = await Consulta.findOne({ _id: id });

    return consulta;
  }
}

module.exports = new ConsultaRepository();
