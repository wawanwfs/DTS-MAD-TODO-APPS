import React, { useState } from 'react';
import Input from './Input';

const TodoItem = ({ todo, onEdit, onDelete, onToggleDisable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (todo.disabled) return;
        if (isEditing) {
            onEdit(todo.id, newText);
        }
        setIsEditing(!isEditing);
    }

    return (
        <div className={`w-96 flex justify-between todo-item ${todo.disabled ? 'disabled' : ''}`}>
            {isEditing ? (
                <Input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className={'h-8 input input-bordered input-primary'}
                />
            ) : (
                <span className={todo.disabled ? 'line-through' : ''}>{todo.text}</span>
            )}
            <div class="inline-flex rounded-md shadow-sm" role="group">
                {!todo.disabled && (
                    <>
                        <button onClick={handleEdit} type="button" className="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button onClick={() => onDelete(todo.id)} type="button" className="px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Delete
                        </button>
                    </>
                )}
                <button onClick={() => onToggleDisable(todo.id)} type="button" className="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    {todo.disabled ? 'Enable' : 'Disable'}
                </button>
            </div>
        </div>



    );
}

export default TodoItem;
