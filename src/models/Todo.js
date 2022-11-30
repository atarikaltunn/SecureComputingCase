const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;