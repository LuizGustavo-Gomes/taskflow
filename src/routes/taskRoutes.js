const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.post('/', taskController.createTask);
router.get('/user/:userId', taskController.getTasks); // Ex: /api/tasks/user/123
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;