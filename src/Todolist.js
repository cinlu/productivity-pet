import './App.css';
import React, { useEffect } from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function Todolist() {
  const[taskList, setTaskList] = React.useState([])


  function addTask(taskItem) {
    // setTaskList([...taskList, taskItem])
    setTaskList([...taskList, {id: crypto.randomUUID(), taskItem}])
  }

  function removeTask(id) {
    setTaskList(currList => {
      return currList.filter(todo => todo.id !== id)
    })
  } 

    return (
      <div >
        <TodoForm addTask={addTask}/>
        <Todos taskList={taskList} removeTask={removeTask}/>
      </div>
    );
  }
  
  export default Todolist;