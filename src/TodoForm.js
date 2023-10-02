import React from "react"

function TodoForm() {
    const[task, setTask] = React.useState("")
    const[taskList, setTaskList] = React.useState([])

    function handleChange(event) {
        setTask(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setTaskList([...taskList, task])
        setTask("")
        console.log(taskList)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Let's Get Some Work Done!"
            onChange={handleChange}
            name="task"
            value={task}
        />
        <button>Add</button>
      </form>
    );
  }
  
  export default TodoForm;