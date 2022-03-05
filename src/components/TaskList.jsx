import React from "react"
import TaskItem from "./TaskItem"

const TaskList = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-3">
          <TaskItem />
        </div>
      </div>
    </div>
  )
}

export default TaskList
