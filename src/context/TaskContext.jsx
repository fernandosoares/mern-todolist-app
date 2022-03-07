import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const TaskContext = createContext([])

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isEdit, setIsEdit] = useState(0)
  const [loading, setLoading] = useState(true)

  const addTaskToList = async task => {
    const options = {
      method: "POST",
      url: "https://soaresdev-restful-todolist.herokuapp.com/todos/",
      headers: { "Content-Type": "application/json" },
      data: { description: task },
    }

    const createdTask = await axios.request(options)

    setTasks([...tasks, createdTask.data])
  }

  const loadTask = id => {
    setIsEdit(id)
    return tasks.map(task => {
      task._id === id ? setInputValue(task.description) : ""
    })
  }

  const updateTask = newTask => {
    setLoading(true)
    const options = {
      method: "PUT",
      url: `https://soaresdev-restful-todolist.herokuapp.com/todos/${newTask._id}`,
      headers: { "Content-Type": "application/json" },
      data: { description: newTask.description, completed: !newTask.completed },
    }

    axios
      .request(options)
      .then(res => {
        console.log(res.data)
        tasks.map(task => {
          task._id === newTask._id
            ? ((task.description = newTask.description), (task.completed = !task.completed))
            : task
          setTasks([...tasks], task)
          setIsEdit(0)
          setLoading(false)
        })
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  const completeTask = id => {
    tasks.map(task => {
      id === task.id ? (task.completed = !task.completed) : task
      setTasks([...tasks], task)
    })
  }

  const deleteTask = id => {
    setLoading(true)
    const options = {
      method: "DELETE",
      url: `https://soaresdev-restful-todolist.herokuapp.com/todos/${id}`,
      headers: { "Content-Type": "application/json" },
    }

    axios.request(options).then(res => {
      setTasks([...tasks].filter(task => task._id !== id))
      setLoading(false)
    })
  }

  useEffect(() => {
    ;(async () => {
      const res = await axios.get("https://soaresdev-restful-todolist.herokuapp.com/todos")
      setTasks(...tasks, res.data)
      setLoading(false)
    })()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        loading,
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
