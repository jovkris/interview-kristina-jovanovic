import React, { useState } from 'react';
import TodoForm from './TodoForm';



const Todo = ({ todo, handleCompleteTodo, handleDeleteTodo, handleUpdateTodo }) => {
    const [edit, setEdit] = useState(false);


    if (edit) {
        return <TodoForm editValue={todo.text} setEdit={setEdit} id={todo._id} handleUpdateTodo={handleUpdateTodo} />;
    };


    return (
        <div className='row'>
            <div className={todo.isComplete ? 'card-panel complete col s12 flow-text grey lighten-3' : 'card-panel col s12 flow-text hoverable'}>
                {todo.text}

                <div className='icons right'>

                    <a className="waves-effect waves-light btn-small" onClick={() => setEdit(true)}><i className='small material-icons'>edit</i></a>

                    <a className="waves-effect waves-light btn-small green-text"><i className='small material-icons' onClick={() => handleCompleteTodo(todo._id, !todo.isComplete)}>check</i></a>

                    <a className="waves-effect waves-light btn-small red-text"><i className='small material-icons' onClick={() => handleDeleteTodo(todo._id)}>close</i></a>

                </div>
            </div>
        </div >
    );


}

export default Todo;