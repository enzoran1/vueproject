const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    description: {type: String, required:true},
    done: {type: Boolean, default:false},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Todos', todosSchema);