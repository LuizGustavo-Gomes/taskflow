const express = require('express');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

// Rotas da API
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
    res.send('API TaskFlow funcionando!');
});

module.exports = app;