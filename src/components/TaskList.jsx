import React, { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import TaskItem from "./TaskItem"

const TaskList = () => {
  const { state } = useContext(TaskContext)
  const { tasks } = state

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-3">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskList
