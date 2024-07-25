import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/Data'

function App() {

   const first =  useRef(null)
   const second = useRef(null)
      
   const handleClick = ()=>{
   
      first.current.style.border = "2px solid red"
      second.current.style.border = "2px solid red"
      
   }
    


  return (
     <div>
        <input type="email" placeholder='Enter your email' ref={first} /><br /><br />
        <input type="password" placeholder='Enter your password' ref={second} /><br /><br />
        <button onClick={handleClick}>Submit</button>
     </div>
  )
}

export default App
