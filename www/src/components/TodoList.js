import React, { useEffect, useState } from 'react';
import { createTodo, getAllTodos } from '../api/actions';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const testFunction = async () => {
            const { data } = await getAllTodos();
            setTodos(data);
        }
        testFunction();
    }, [])
    const handleCreateTodo = async (todo) => {
        if (!todo.text.trim()) {
            return;
        }
        const { status, data } = await createTodo(todo);
        if (status >= 200 && status < 300) {
            const newTodos = [...todos, data];
            setTodos(newTodos);
        }
    }

    return (
        <div className='row'>
            <h2>What's the <br></br> plan?</h2>
            <TodoForm handleCreateTodo={handleCreateTodo} />
            {todos?.map(todo => <Todo key={todo._id} todo={todo} />)}
        </div>
    );
}

export default TodoList;