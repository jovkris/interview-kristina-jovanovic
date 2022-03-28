import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value.trim() : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            text: input,
        });

        setInput('');
    }

    return (
        <form className='todo-form row center-align' onSubmit={handleSubmit} >
            {props.edit ? (
                <>
                    <div className='input-field'>
                        <input
                            type='text'
                            placeholder="Update your todo"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                    </div>
                    <button className='waves-effect waves-light btn blue'>Update</button>
                    <button className='waves-effect waves-light btn red lighten-1' onClick={(e) => {
                        e.preventDefault();
                        setInput('')
                    }}>Clear</button>
                </>
            ) : (

                <>
                    <div className='input-field'>
                        <input
                            type='text'
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                    </div>
                    <button className='waves-effect waves-light btn blue accent-2'>Add todo</button>
                </>
            )}


        </form>
    );
}

export default TodoForm;