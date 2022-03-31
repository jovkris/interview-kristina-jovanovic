import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { updateTodo, deleteTodo } from './../api/actions'


const Todo = ({ todo }) => {
    const [edit, setEdit] = useState(false);


    if (edit) {
        return <TodoForm editValue={todo.text} setEdit={setEdit} id={todo._id} />;
    };

    const handleComplete = async () => {
        const { status, data } = await updateTodo(todo._id, { isComplete: !todo.isComplete });
        if (status >= 200 && status < 300) {
            //kod koji komunicira sa todos iz komponente TodoList tako sto prosledjuje data 
        }

    }

    const handleDelete = async () => {
        const { status, data } = await deleteTodo(todo._id);
        if (status >= 200 && status < 300) {
            //kod koji komunicira sa todos iz komponente TodoList tako sto brise todo sa odredjenim id-em
        }

    }

    return (
        <div className='row'>
            <div className={todo.isComplete ? 'card-panel complete col s12 flow-text grey lighten-3' : 'card-panel col s12 flow-text hoverable'}>
                {todo.text}

                <div className='icons right'>

                    <a className="waves-effect waves-light btn-small" onClick={() => setEdit(true)}><i className='small material-icons'>edit</i></a>

                    <a className="waves-effect waves-light btn-small green-text"><i className='small material-icons' onClick={handleComplete}>check</i></a>

                    <a className="waves-effect waves-light btn-small red-text"><i className='small material-icons' onClick={handleDelete}>close</i></a>

                </div>
            </div>
        </div >
    );


}

export default Todo;