import React, { useState, useEffect, useRef } from 'react';



const TodoForm = ({ editValue, id, handleCreateTodo, setEdit, handleUpdateTodo }) => {
    const [input, setInput] = useState(editValue !== undefined ? editValue.trim() : '');

    const inputRef = useRef(null);

    const formRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const clickHandler = (e) => {

        if (setEdit && formRef.current && !formRef.current.contains(e.target)) {
            setEdit(false);
        }
        else if (setEdit && e.key === "Escape") {
            setEdit(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", clickHandler);
        return () => {
            document.removeEventListener("mousedown", clickHandler);
        };
    });

    useEffect(() => {
        document.addEventListener("keydown", clickHandler);
        return () => {
            document.removeEventListener("keydown", clickHandler);
        };
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleEdit = () => setEdit(false);


    const handleSubmit = e => {
        e.preventDefault();

        if (id) {
            handleUpdateTodo(id, input, handleEdit);
        } else {
            handleCreateTodo({ text: input });
        }

        setInput('');
    };

    return (
        <form className='todo-form row center-align' onSubmit={handleSubmit} ref={formRef} >
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
                <button disabled={input.trim() === ''} className='waves-effect waves-light btn blue'>{id ? 'Update' : 'Add todo'}</button>
            </>
        </form>
    );
};

export default TodoForm;