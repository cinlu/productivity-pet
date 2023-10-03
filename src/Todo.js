import { useEffect, useState } from 'react';
import './Todo.css';

function Todo({id, taskItem, removeTask}) {
  const[clicked, setClicked] = useState(false)

  //only runs after the Todo component is rendered :D
  useEffect(() => {
    if (clicked) {
      removeTask(id)
    }
  })

    return (
        <li onDoubleClick={() => setClicked(true)}>
        
        {/* <li > */}
        {taskItem}
      </li>
    );
  }
  
  export default Todo;