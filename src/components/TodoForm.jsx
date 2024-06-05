import React, { useState } from 'react';
import Input from './Input';

const TodoForm = ({ onAddTodo }) => {
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim()) {
            onAddTodo(newTodoText);
            setNewTodoText('');
        }
    };

    return (
        <div className="flex">
            <Input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Add a new todo"
                className={'input input-bordered input-primary w-full max-w-xs'}
            />
            <button className="btn btn-primary ms-2" onClick={handleAddTodo}>
                Add Todo
            </button>
        </div>
    );
};

export default TodoForm;