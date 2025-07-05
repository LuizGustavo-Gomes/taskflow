const app = require('./app');
require('dotenv').config(); // Garante que as variáveis de ambiente sejam carregadas

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});