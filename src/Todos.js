import React from 'react';
import Todo from './Todo';

function Todos({taskList, removeTask}) {
    return (
      <ul>
        {taskList.length === 0 && "No Todos"}
        
        {taskList.map(todo => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              removeTask={removeTask}
            />
          )
        })}
      </ul>
    );
  }
  
  export default Todos;