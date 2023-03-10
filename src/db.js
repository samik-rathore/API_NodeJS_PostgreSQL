const {Pool} = require('pg');
require('dotenv').config();

const connectionString = process.env.CONN;

const pool = new Pool({
    connectionString,
  });

module.exports = pool;