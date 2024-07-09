import React from "react";
import { useState } from "react";
import './todoform.css';

function TodoForm({addTodo}){
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!value) return;
        addTodo (value);
        setValue('');
    };
return(
    <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="input" value={value} placeholder="Add a new task" onChange={e=>setValue(e.target.value)}/>
        <button type="submit" className="button">Add ToDo</button>
    </form>
);
}
export default TodoForm;
