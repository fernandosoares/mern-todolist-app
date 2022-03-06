import React, { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskItem = ({ task }) => {
  const { completeTask, deleteTask, loadTask } = useContext(TaskContext)

  const handleEdit = () => {
    if (!task) return
    loadTask(task.id)
  }

  const handleComplete = () => {
    if (!task) return
    completeTask(task.id)
  }

  const handleDelete = () => {
    if (!task) return
    deleteTask(task.id)
  }

  let completedClass = task.completed ? " text-decoration-line-through text-muted" : ""

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h4 className={`mb-2 ${completedClass}`}>{task.title}</h4>
        <div className="actions">
          <button className="btn btn-warning mx-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-success mx-2" onClick={handleComplete}>
            Complete
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem
