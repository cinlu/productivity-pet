import React from "react"

function TodoForm() {
    const[task, setTask] = React.useState("")

    function handleChange(event) {
        setTask(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(task)
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