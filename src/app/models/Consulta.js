const mongoose = require('mongoose');

const Consulta = mongoose.model('Consulta', {
  paciente: String,
  idade: Number,
  cpf: String,
  telefone: Number,
  especialidade: String,
  created_at: Date,
  updated_at: Date,
  retorno: Boolean,
});

module.exports = Consulta;
