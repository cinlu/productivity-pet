import './Todo.css';
import React from 'react';

function Todo({id, taskItem, removeTask}) {
    return (
        // <li onDoubleClick={removeTask(id)}>
        
        <li >
        {taskItem}
      </li>
    );
  }
  
  export default Todo;