const Todo = require('../models/Todo');

exports.getTodoList = async (req, res) => {
    onGetTodoList(res);
};
exports.createTodo = async (req, res) => {
    const { name, status } = req.body;
    onCreateTodo(name, status, req, res);
};
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    onUpdateTodo(id, name, status, req, res);
};
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    onDeleteTodo(id, res);
};

async function onGetTodoList(res) {
    const todoList = await Todo.find({}, '-_id name status').catch((err) => {
        if (err) {
            res.status(500);
        }
    });
    res.status(200).json(todoList);
}
async function onCreateTodo(name, status, req, res) {
    await Todo.create({
        name: name,
        status: status,
    }).catch((err) => {
        if (err) {
            res.status(500);
        }
    });
    res.status(201).json(req.body);
}
async function onUpdateTodo(id, name, status, req, res) {
    await Todo.findByIdAndUpdate(id, { name: name, status: status })
        .then(() => {
            res.json(req.body);
        })
        .catch((err) => {
            res.status(500);
        });
}
async function onDeleteTodo(id, res) {
    await Todo.findByIdAndRemove(id)
        .then(() => {
            res.json({ deleted: id });
        })
        .catch((err) => {
            res.status(500);
        });
}
