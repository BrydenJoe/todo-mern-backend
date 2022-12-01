const ToDoModel = require("../models/ToDoModel");

module.exports.createToDo = async(request, response) => {
    const { text } = request.body;
    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            response.set(201).send(data)
        })
        .catch((err) => console.log(err))
}

module.exports.readToDo = async(request, response) => {
    const todo = await ToDoModel.find();
    response.send(todo);
}

module.exports.updateToDo = (request, response) => {
    const { _id, text } = request.body;
    ToDoModel
        .findByIdAndUpdate(_id, {text})
        .then(() => response.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = (request, response) => {
    const {_id} = request.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => response.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}

