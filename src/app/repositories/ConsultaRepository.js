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

  async updateConsulta(id, dados) {
    await Consulta.updateOne({ _id: id }, dados);

    const consulta = await this.findById(id);

    return consulta;
  }

  async updateRetorno(id) {
    await Consulta.updateOne({ _id: id }, { retorno: true });
  }
}

module.exports = new ConsultaRepository();
