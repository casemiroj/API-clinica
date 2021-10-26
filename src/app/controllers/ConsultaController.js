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

  async listarConsultas(req, res) {
    const consultas = await ConsultaRepository.findAll();

    if (!consultas) {
      res.status(404).json({ Erro: 'Nenhuma consulta encontrada' });
    }

    return res.status(200).json(consultas);
  }
}

module.exports = new ConsultaController();
