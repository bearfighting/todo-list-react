import { useState } from "react"
import "./todo.css"

const Todo: React.FC = () => {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState<Array<string>>([])
  return (
    <div className="todo">
      <input
        type="text"
        defaultValue="a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTasks((prev) => [...prev, task])
        }}
      >
        Add
      </button>
      <div>
        {tasks.map((task) => (
          <div>{task}</div>
        ))}
      </div>
    </div>
  )
}

export default Todo
