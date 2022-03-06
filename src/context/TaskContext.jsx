import { createContext, useState } from "react"

export const TaskContext = createContext([])

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([{ id: 1, title: "Task #1", completed: false }])
  const [inputValue, setInputValue] = useState("")
  const [isEdit, setIsEdit] = useState(0)

  const _generateId = () => {
    return Math.ceil(Math.random() * 1000) + 1
  }

  const addTaskToList = task => {
    setTasks([...tasks, { id: _generateId(), title: task, completed: false }])
  }

  const loadTask = id => {
    setIsEdit(id)
    return tasks.map(task => {
      task.id === id ? setInputValue(task.title) : ""
    })
  }

  const updateTask = (id, title) => {
    tasks.map(task => {
      task.id === id ? (task.title = title) : task
      setTasks(tasks, task)
      setIsEdit(0)
    })
  }

  const completeTask = id => {
    tasks.map(task => {
      id === task.id ? (task.completed = !task.completed) : task
      setTasks([...tasks], task)
    })
  }

  const deleteTask = id => {
    setTasks([...tasks].filter(task => task.id !== id))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        isEdit,
        setInputValue,
        addTaskToList,
        loadTask,
        updateTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
