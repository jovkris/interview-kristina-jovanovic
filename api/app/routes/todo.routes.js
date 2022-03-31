module.exports = app => {
    const todos = require("../controllers/todos.controller.js");
    var router = require("express").Router();
    // Create a new todo
    router.post("/", todos.create);
    // Retrieve all todos
    router.get("/", todos.findAll);
    // Update a todo with id
    router.put("/:id", todos.update);
    // Delete a todo with id
    router.delete("/:id", todos.delete);
    app.use('/api/todos', router);
};