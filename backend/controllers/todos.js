
const TodoService = require('../services/todos');

exports.list = (req,res) => {
    TodoService.list()
    .then((todos) =>{
        res.status(200).json(todos);
    })
    .catch((err)=>{
        res.status(500).send(err.error);
    })
}
exports.view = (req,res) => {
    TodoService.view(req.params.id)
    .then((todos) =>{
        res.status(200).json(todos);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err.error);
    })
}

exports.delete = (req,res) => {
    TodoService.delete(req.params.id)
    .then((deleteResponse) =>{
        res.status(200).json(deleteResponse);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send(err.error);
    })
}
exports.add = (req,res) => {
    TodoService.add(req.body)
    .then(() =>{
        res.status(200).send("OK");
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}
exports.edit = (req,res) => {
    TodoService.edit(req.params.id,req.body)
    .then(() =>{
        res.status(200).send("OK");
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}
