const {Schema} = mongoose = require('mongoose');

// DEUX VARIABLES -> mongoose, Schema. mongoose.Schema.

const connect =  {
  host: 'localhost',
  port: 27017,
  dbName: 'petsitting'
}

// 'mongodb://localhost:27017/petsitting';
const connection = mongoose.connect('mongodb://' + connect.host + ':' + connect.port + '/' + connect.dbName);

module.exports = connection;