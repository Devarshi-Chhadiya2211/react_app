import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="container">
        <div class="form">
            <input type="text" class="input" />
            <input type="submit" class="add" value="Add Task" />
        </div>
        <div class="tasks"></div>
        <div class="delete-all">Delete all</div>
        </div>
    </>
  )
}

export default App
