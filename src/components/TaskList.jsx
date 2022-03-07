import React, { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import Loading from "./Loading"
import TaskItem from "./TaskItem"

const TaskList = () => {
  const { tasks, loading } = useContext(TaskContext)

  if (loading) return <Loading />

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-3">
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskList
