require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const router = require('./routes');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@uninove-clinica.uqrsa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    console.log('📚 Banco de dados conectado');
    app.listen(process.env.PORT || 3000, () => console.log('🔥 Servidor online'));
  })
  .catch((err) => console.log(err));
