const {Client} = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  database: 'petsitting',
  user: 'postgres',
  password: 'sara'
});

module.exports = client;