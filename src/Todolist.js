import './App.css';
import React, { useEffect } from 'react';
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const getLocalStorage = () => {
  let list = localStorage.getItem('tasks');

  if (list) {
    return JSON.parse(list);
  } else {
    return []; 
  }
}

function Todolist() {
  const[taskList, setTaskList] = React.useState(getLocalStorage())


  function addTask(taskItem) {
    // setTaskList([...taskList, taskItem])
    setTaskList([...taskList, {id: crypto.randomUUID(), taskItem}])
  }

  function removeTask(id) {
    console.log("hi")
    setTaskList(currList => {
      return currList.filter(todo => todo.id !== id)
    })
  } 

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList)); 
  }, [taskList])


    return (
      <div >
        <TodoForm addTask={addTask}/>
        <Todos taskList={taskList} removeTask={removeTask}/>
      </div>
    );
  }
  
  export default Todolist;