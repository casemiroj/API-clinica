require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('📚 Banco de dados conectado');
    app.listen(process.env.PORT || 3000, () => console.log('🔥 Servidor online'));
  })
  .catch((err) => console.log(err));
