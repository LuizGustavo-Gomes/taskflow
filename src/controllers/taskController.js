const TaskModel = require('../models/taskModel');

const taskController = {
    async createTask(req, res) {
        // Em um projeto real, o userId viria de um middleware de autenticação
        // Por enquanto, vou assumir que vem do body para testar, mas isso NÃO É SEGURO
        // Em produção, use req.user.id de um token JWT, por exemplo.
        const { title, description, userId, dueDate } = req.body;

        if (!title || !userId) {
            return res.status(400).json({ message: 'Título e ID do usuário são obrigatórios.' });
        }

        try {
            const newTask = await TaskModel.create(title, description, userId, dueDate);
            res.status(201).json(newTask);
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    },

    async getTasks(req, res) {
        // userId também viria do token aqui
        const { userId } = req.params; // Assumindo que o userId virá da URL, ex: /tasks/user/1

        try {
            const tasks = await TaskModel.getAllByUserId(userId);
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    },

    async updateTask(req, res) {
        const { id } = req.params;
        const { title, description, completed, userId, dueDate } = req.body; // userId para verificação

        if (!title || typeof completed !== 'boolean' || !userId) {
            return res.status(400).json({ message: 'Todos os campos obrigatórios para atualização são necessários.' });
        }

        try {
            const updatedTask = await TaskModel.update(id, userId, title, description, completed, dueDate);
            if (!updatedTask) {
                return res.status(404).json({ message: 'Tarefa não encontrada ou você não tem permissão.' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    },

    async deleteTask(req, res) {
        const { id } = req.params;
        const { userId } = req.body; // userId para verificação

        if (!userId) {
            return res.status(400).json({ message: 'ID do usuário é obrigatório.' });
        }

        try {
            const deletedTask = await TaskModel.delete(id, userId);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Tarefa não encontrada ou você não tem permissão.' });
            }
            res.status(200).json({ message: 'Tarefa deletada com sucesso!', deletedTask });
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            res.status(500).json({ message: 'Erro interno do servidor.' });
        }
    }
};

module.exports = taskController;