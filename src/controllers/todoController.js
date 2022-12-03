const Todo = require('../models/Todo');

/**
 * Calls function onGetTodoList() when a GET request comes to <URL>/todo-list
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
exports.getTodoList = async (req, res) => {
    onGetTodoList(res);
};

/**
 * Calls function onCreateTodo() when a POST request comes to <URL>/todo-list
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
exports.createTodo = async (req, res) => {
    const { name, status } = req.body;
    onCreateTodo(name, status, req, res);
};

/**
 * Calls function onUpdate() when a PUT request comes to <URL>/todo-list/:id
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    onUpdateTodo(id, name, status, req, res);
};

/**
 * Calls function onDeleteTodo() when a DELETE request comes to <URL>/todo-list/:id
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    onDeleteTodo(id, res);
};

/**
 * Responses the calls with all finded todos.
 *
 * @param {*} res ExpressJS's Response object
 */
async function onGetTodoList(res) {
    const todoList = await Todo.find({}, '-_id name status').catch((err) => {
        res.status(500);
    });
    res.status(200).json(todoList);
}

/**
 * Responses the calls with req.body after creating a todo.
 * @param {string} name Name of todo
 * @param {string} status Name of status
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
async function onCreateTodo(name, status, req, res) {
    await Todo.create({
        name: name,
        status: status,
    }).catch((err) => {
        res.status(500);
    });
    res.status(201).json(req.body);
}

/**
 * Responses the calls with req.body after creating a todo.
 * @param {*} id ID of todo that wanted to update
 * @param {*} name updated name of todo
 * @param {*} status updated status of todo
 * @param {*} req ExpressJS's Request object
 * @param {*} res ExpressJS's Response object
 */
async function onUpdateTodo(id, name, status, req, res) {
    await Todo.findByIdAndUpdate(id, { name: name, status: status })
        .then(() => {
            res.status(201).json(req.body);
        })
        .catch((err) => {
            res.status(500);
        });
}

/**
 * Responses the deleted todo's id after deleting a todo.
 * @param {*} id ID of todo that wanted to delete
 * @param {*} res ExpressJS's Response object
 */
async function onDeleteTodo(id, res) {
    await Todo.findByIdAndRemove(id)
        .then(() => {
            res.json({ deleted: id }).status(200);
        })
        .catch((err) => {
            res.status(500);
        });
}
