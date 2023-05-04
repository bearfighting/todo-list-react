import "./todo-list.css"

export interface ToDo {
  index: number
  name: string
  done: boolean
}

interface TodoListProps {
  list: Array<ToDo>
}

const TodoList: React.FC<TodoListProps> = ({list}) => {
  return <div className="todo-list">
    {list.map(todo => <div className="todo" key={todo.name + todo.index}>
      <p className="todo-index">{todo.index}: </p>
      <p className="todo-name">{todo.name}</p>
      <input className="todo-checkbox" type="checkbox" name={todo.name} id={todo.name + todo.index} onChange={(e) => console.log(e)}/>
    </div>)}
  </div>
}

export default TodoList