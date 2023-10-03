import './TodoForm.css';
import React from "react"

function TodoForm({addTask}) {
    const[task, setTask] = React.useState("")

    function handleChange(event) {
        setTask(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (task === "") {
          return 
        }

        addTask(task)

        setTask("")
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
        <br/> 
        <button>Add</button>
      </form>
    );
  }
  
  export default TodoForm;