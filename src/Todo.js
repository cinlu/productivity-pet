import React from 'react';

function Todo({id, taskItem, removeTask}) {
    return (
      <li >
        {taskItem}
      </li>
    );
  }
  
  export default Todo;