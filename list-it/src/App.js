import React, { useState } from 'react';
import Todo from './todo';
import TodoForm from './todoform';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Date.now() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
