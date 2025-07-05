const { Pool } = require('pg');
require('dotenv').config(); // Carrega as variáveis de ambiente

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL!');
});

pool.on('error', (err) => {
    console.error('Erro na conexão com o banco de dados:', err);
    process.exit(-1); // Encerrar a aplicação em caso de erro crítico no DB
});

module.exports = pool;