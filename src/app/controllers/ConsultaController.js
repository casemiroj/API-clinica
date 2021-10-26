const ConsultaRepository = require('../repositories/ConsultaRepository');

class ConsultaController {
  async criarConsulta(req, res) {
    const {
      paciente, idade, telefone, cpf, especialidade,
    } = req.body;

    if (!(paciente && idade && telefone && cpf && especialidade)) {
      return res.status(400).json({ Erro: 'Informe todos os dados' });
    }

    const consulta = await ConsultaRepository.create({
      paciente, idade, telefone, cpf, especialidade,
    });

    return res.status(201).json(consulta);
  }
}

module.exports = new ConsultaController();
