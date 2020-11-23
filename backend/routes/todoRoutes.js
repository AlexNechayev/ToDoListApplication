const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Todo Routes
router.get('/', todoController.todo_index);
router.post('/', todoController.todo_post);
router.get('/:id', todoController.todo_details);
router.delete('/:id', todoController.todo_delete);
router.put('/:id', todoController.todo_update);

module.exports = router;