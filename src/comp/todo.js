import React, { useState } from 'react';
import './todo.css';

const Todo = () => {

    const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const addTodo = () => {
    if (currentTodo.trim() !== '') {
      setTodos([...todos, currentTodo]);
      setCurrentTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className='card'>
      <h1 className='ard' style={{marginBottom:"20px"}}>Todo App</h1>
      <div className='spd'>
      <input
        type="text"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      </div>
    

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index, prompt('Edit todo', todo))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;




