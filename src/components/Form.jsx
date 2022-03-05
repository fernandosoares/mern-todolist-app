import React, { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const Form = () => {
  const { state, addTaskToList } = useContext(TaskContext)
  const [task, setTask] = useState("")

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTaskToList(task)
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-5">
          <form onSubmit={handleSubmit} className="d-flex justify-content-between">
            <input
              type="text"
              name="task"
              id="task"
              className="form-control"
              placeholder="Task name"
              value={task}
              onChange={handleChange}
            />
            <button className="btn btn-primary mx-2">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
