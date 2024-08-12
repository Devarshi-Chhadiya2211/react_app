import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [obj,setObj] = useState({
      email : "",
      password : "",
      username : ""
   })
   const [arr,setarr] = useState([])
   const [viewPass,setviewPass] = useState(false)
   const [pass,setPass] = useState(null)
   const handleChange = (e)=>{
        let {name,value} = e.target
      setObj({...obj,[name] : value})
   }
   const handleSubmit = (e)=>{
     e.preventDefault()
    setarr([...arr,obj])
    setObj({
      email : "",
      password : "",
      username : ""
    })
   }
   const handleBlur =()=>{
    // let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,25}$/; 

    //  console.log(regex.test(obj.password))
        if(obj.password.length >= 8){
          setPass(true)
        }else{
          setPass(false)
        }
        
   }
   const handleFocus = ()=>{
    //  console.log("Focus wala"); 
   }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label><br />
          <input type="text" value={obj.username}  name='username' onChange={handleChange} /><br /><br />
        <label htmlFor="">Email</label><br />
        <input type="email" value={obj.email} name='email' onChange={handleChange} required/><br /><br />
        <label htmlFor="">Password</label><br />
         <input type={viewPass ?  "text" : "password"} className={pass == false ? 'a' : ""} onBlur={handleBlur}  name='password' value={obj.password} onChange={handleChange} required/>
         {pass == false ? <span>Password Must contain 8 Characters</span> : ""}
         {viewPass==false ? <span onClick={()=>setviewPass(true)} className="material-symbols-outlined">
          visibility
            </span> : <span onClick={()=>setviewPass(false)} className="material-symbols-outlined">
            visibility_off 
            </span>} <br /><br />
         <input type="submit" />
      </form>
    </>
  )
}

export default App
