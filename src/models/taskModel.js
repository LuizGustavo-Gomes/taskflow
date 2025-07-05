const pool = require('../config/database');

const TaskModel = {
    async create(title, description, userId, dueDate = null) {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, user_id, due_date) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, userId, dueDate]
        );
        return result.rows[0];
    },
    async getAllByUserId(userId) {
        const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
        return result.rows;
    },
    async getByIdAndUserId(taskId, userId) {
        const result = await pool.query('SELECT * FROM tasks WHERE id = $1 AND user_id = $2', [taskId, userId]);
        return result.rows[0];
    },
    async update(taskId, userId, title, description, completed, dueDate = null) {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, completed = $3, due_date = $4 WHERE id = $5 AND user_id = $6 RETURNING *',
            [title, description, completed, dueDate, taskId, userId]
        );
        return result.rows[0];
    },
    async delete(taskId, userId) {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *', [taskId, userId]);
        return result.rows[0];
    }
};

module.exports = TaskModel;