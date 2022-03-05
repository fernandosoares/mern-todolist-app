import React from "react"

const TaskItem = () => {
  return (
    <div className="card ">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Task #1</h4>
        <div className="actions">
          <button className="btn btn-warning mx-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
