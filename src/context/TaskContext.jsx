import { createContext, useState } from "react"

export const TaskContext = createContext([])

export const TaskProvider = ({ children }) => {
  const [state, setState] = useState({
    tasks: [
      {
        id: 1,
        title: "Tirar o lixo",
      },
    ],
  })

  console.log(state.tasks)

  return <TaskContext.Provider value={{ state, setState }}>{children}</TaskContext.Provider>
}
