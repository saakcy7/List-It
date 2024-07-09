import React from "react";
import "./todo.css";
function Todo({todo,removeTodo}){
    return(
        <div className="todo">
            <span>{todo.text}</span>
            <div>
                <button onClick={()=>removeTodo(todo.id)}>Remove</button>
            </div>
        </div>
    )
}
export default Todo;
