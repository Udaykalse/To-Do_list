import React, { useState } from 'react';
import './TodoList.css';
import Navbar from './Navbar';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Add a todo..."
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              <span className="serial-number">{index + 1}</span>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
