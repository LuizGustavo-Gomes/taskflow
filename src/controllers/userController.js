const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt'); // Para hash de senhas

const userController = {
    async register(req, res) {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
        }

        try {
            // Verificar se o usuário já existe
            const existingUser = await UserModel.findByEmail(email);
            if (existingUser) {
                return res.status(409).json({ message: 'Email já cadastrado.' });
            }

            // Hash da senha (importante para segurança!)
            const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de rounds de salting

            const newUser = await UserModel.create(username, email, hashedPassword);
            // Não retorne a senha hashed no response!
            const { password: _, ...userWithoutPassword } = newUser;
            res.status(201).json({ message: 'Usuário registrado com sucesso!', user: userWithoutPassword });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    },
};

module.exports = userController;