const db = require("../models");
const Todo = db.todos;
// Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.text) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    // Create a Todo
    const todo = new Todo({
        text: req.body.text,
        isComplete: false
    });
    // Save Todo in the database
    todo
        .save(todo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Todo."
            });
        });
};
// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
    Todo.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving todos."
            });
        });
};
// Update a Todo by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const _id = req.params.id;
    Todo.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
                });
            } else res.send({ message: "Todo was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Todo with id=" + id
            });
        });
};
// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
    const _id = req.params.id;
    Todo.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Todo with id=${_id}. Maybe Todo was not found!`
                });
            } else {
                res.send({
                    message: "Todo was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Todo with id=" + _id
            });
        });
};