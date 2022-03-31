import React, { useEffect, useState } from 'react';
import { createTodoAction, getAllTodosAction, updateTodoAction, deleteTodoAction } from '../api/actions';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        handleGetAllTodos();
    }, []);

    const handleGetAllTodos = async () => {
        const { status, data } = await getAllTodosAction();
        if (status >= 200 && status < 300) {
            setTodos(data);
        }
    };

    const updateTodo = (newValue) => {
        let updatedTodos = todos.map(todo => {
            if (todo._id === newValue.id) {
                todo.text = newValue.text;
                todo.isComplete = false;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const removeTodo = id => {
        const removeArr = todos.filter(todo => todo._id !== id);
        setTodos(removeArr);

    };

    const completeTodo = (newValue) => {
        let updatedTodos = todos.map(todo => {
            if (todo._id === newValue.id) {
                todo.isComplete = newValue.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const handleCompleteTodo = async (id, isComplete) => {
        const { status } = await updateTodoAction(id, { isComplete });
        if (status >= 200 && status < 300) {
            completeTodo({ id, isComplete });
        }
    };

    const handleCreateTodo = async (todo) => {
        if (!todo.text.trim()) {
            return;
        }
        const { status, data } = await createTodoAction(todo);
        if (status >= 200 && status < 300) {
            const newTodos = [...todos, data];
            setTodos(newTodos);
        }
    };

    const handleUpdateTodo = async (id, input, handleEdit) => {
        if (input.trim() !== '') {
            const { status } = await updateTodoAction(id, { text: input, isComplete: false });
            if (status >= 200 && status < 300) {
                updateTodo({ id, text: input });
                handleEdit();
            }
        }
    };


    const handleDeleteTodo = async (id) => {
        const { status } = await deleteTodoAction(id);
        if (status >= 200 && status < 300) {
            removeTodo(id);
        }

    };

    return (
        <div className='row'>
            <h2>What's the <br></br> plan?</h2>
            <TodoForm handleCreateTodo={handleCreateTodo} handleUpdateTodo={handleUpdateTodo} />
            {todos?.map(todo => <Todo key={todo._id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} handleUpdateTodo={handleUpdateTodo} />)}
        </div>
    );
};

export default TodoList;