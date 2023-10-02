import React from "react"

function TodoForm() {
    const[task, setTask] = React.useState("")

    console.log(task)

    function handleChange(event) {
        setTask(event.target.value)
    }

    return (
      <form>
        <input
            type="text"
            placeholder="Let's Get Some Work Done!"
            onChange={handleChange}
            name="task"
            value={task}
        />
      </form>
    );
  }
  
  export default TodoForm;