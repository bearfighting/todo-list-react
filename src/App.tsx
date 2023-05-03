import { useState } from 'react'
import './App.css'
import Title from './components/title'
import Todo from './components/todo'

function App() {
  return (
    <div className='container'>
      <Title/>
      <Todo/>
    </div>
  )
}

export default App
