import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/signup'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup></Signup>
      <h1>{count}</h1>
    </div>
  )
}


export default App