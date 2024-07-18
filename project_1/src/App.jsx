import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/Data'

function App() {

  const [data,setData] = useState([])
  const [state,setState] = useState(10)
   
  const handleClick = ()=>{
       fetch(`https://fakestoreapi.in/api/products`)
       .then(res => res.json())
       .then((res)=>{
        setData(res.products)
       })
       .catch((err)=>{
        console.log(err)
       })
  }
  
 
  return (
    <>


    
      <Data arr={data}/>
      {/* <button onClick={()=>setState(10)} >1</button>
      <button onClick={()=>setState(20)}>2</button> */}
      <button onClick={handleClick}>Fetch Data</button>
    </>
  )
}

export default App