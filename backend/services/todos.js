const Todo = require('../models/todos');
exports.list = () => {
    return Todo.find({}, null, {sort : {date: -1}});
}
exports.view = (id) => {
    return Todo.findOne({_id:id});
}
exports.add = (obj) => {
    let todo = new Todo({
        description : obj.description,
        done : obj.done
    });
    return todo.save();
}
exports.delete = (id) => {
    return Todo.deleteOne({_id : id});
}
exports.edit = (id,obj) => {
    return new Promise((res,rej)=>{
    this.view(id)
        .then(
            (todo)=>{
                todo.description = obj.description;
                todo.done = obj.done;
            todo.save()
                .then((returnValue)=>{
                    res(returnValue);
                })
                .catch(()=>{
                    rej(`todos ${id} cant be edited`); 
                });
        })
        .catch(()=>{
            rej(`todos with id ${id} not found`); 
        });
    })
    
}