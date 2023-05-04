import { useState } from "react"
import "./todo.css"
import { ToDo } from "./todo-list"

interface ToDoProps {
  setTasks: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const Todo: React.FC<ToDoProps> = ({setTasks}) => {
  const [task, setTask] = useState("")
  return (
    <div className="todo">
      <input
        type="text"
        defaultValue="a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => {setTasks(prev => [...prev, {name: task, done: false}]); setTask('')}}>Add</button>
    </div>
  )
}

export default Todo
