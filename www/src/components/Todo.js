import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    };


    return todos.map((todo, index) => (
        <div key={index} className='row'>
            <div key={todo.id} className={todo.isComplete ? 'card-panel complete col s12 flow-text grey lighten-3' : 'card-panel col s12 flow-text hoverable'}>
                {todo.text}

                <div className='icons right'>

                    <a className="waves-effect waves-light btn-small" onClick={() => setEdit({ id: todo.id, value: todo.text })}><i className='small material-icons' >edit</i></a>

                    <a className="waves-effect waves-light btn-small green-text"><i className='small material-icons' onClick={() => completeTodo(todo.id)}>check</i></a>

                    <a className="waves-effect waves-light btn-small red-text"><i className='small material-icons' onClick={() => removeTodo(todo.id)}>close</i></a>

                </div>
            </div>
        </div >
    ))
}

export default Todo;