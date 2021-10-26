const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.mongoConnection();
  }

  mongoConnection() {
    this.mongoDBConnection = mongoose.connect('mongodb+srv://admin:root@uninove-clinica.uqrsa.mongodb.net/dbclinica?retryWrites=true&w=majority');
  }
}

module.exports = new Connection();
