import { useState } from 'react'
import './App.css'
import Title from './components/title'
import Todo from './components/todo'
import TodoList, { ToDo } from './components/todo-list'


function App() {
  const [todoList, setTodoList] = useState<Array<ToDo>>([{name: 'task1', done: false}])
  return (
    <div className='container'>
      <Title/>
      <Todo setTasks={setTodoList}/>
      <TodoList list={todoList}/>
    </div>
  )
}

export default App
