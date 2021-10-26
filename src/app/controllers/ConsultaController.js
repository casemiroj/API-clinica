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

    if (consultas.length < 1) {
      return res.status(404).json({ Erro: 'Nenhuma consulta encontrada' });
    }

    return res.status(200).json(consultas);
  }

  async listarConsultaPorId(req, res) {
    try {
      const { id } = req.params;

      const consulta = await ConsultaRepository.findById(id);

      if (!consulta) {
        return res.status(400).json({ Erro: 'Nenhuma consulta encontrada' });
      }

      return res.status(200).json(consulta);
    } catch {
      return res.status(500).json({ Erro: 'ID inválido' });
    }
  }
}

module.exports = new ConsultaController();
