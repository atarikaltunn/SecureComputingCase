const express = require('express');
const todoController = require('../controllers/todoController')

const router = express.Router();
// express routers that routing the requests
router.route('/todo-list').get(todoController.getTodoList)
router.route('/todo-list').post(todoController.createTodo)
router.route('/todo-list/:id').put(todoController.updateTodo)
router.route('/todo-list/:id').delete(todoController.deleteTodo)

module.exports = router;