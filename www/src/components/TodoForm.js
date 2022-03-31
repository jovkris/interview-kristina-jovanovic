import React, { useState, useEffect, useRef } from 'react';
import { updateTodo } from './../api/actions'


const TodoForm = ({ editValue, id, handleCreateTodo }) => {
    const [input, setInput] = useState(editValue !== undefined ? editValue.trim() : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (id) {
            updateTodo(id, { text: input })
        } else {
            handleCreateTodo({ text: input })
        }

        setInput('');
    }

    return (
        <form className='todo-form row center-align' onSubmit={handleSubmit} >
            <>
                <div className='input-field'>
                    <input
                        type='text'
                        placeholder={id ? 'Update your todo' : 'Add a todo'}
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                </div>
                <button className='waves-effect waves-light btn blue'>{id ? 'Update' : 'Add todo'}</button>
            </>
        </form>
    );
}

export default TodoForm;