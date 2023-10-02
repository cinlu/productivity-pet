import React from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function Todolist() {
    return (
      <div className="Todo-list">
        <TodoForm/>
        <Todos/>
      </div>
    );
  }
  
  export default Todolist;