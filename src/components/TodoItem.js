// src/components/TodoItem.js
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(todo.id)}>
                {todo.task}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
    );
};

export default TodoItem;
