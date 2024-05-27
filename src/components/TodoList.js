// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
