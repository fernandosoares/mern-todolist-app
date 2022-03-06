import React, { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

const Form = () => {
  const { addTaskToList, inputValue, setInputValue, isEdit, updateTask } = useContext(TaskContext)

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!inputValue || inputValue.length <= 5) return // Show error message

    !isEdit ? addTaskToList(inputValue) : updateTask(isEdit, inputValue)

    setInputValue("")
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
              value={inputValue}
              onChange={handleChange}
            />
            <button className="btn btn-primary mx-2">{!isEdit ? "Create" : "Update"}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
