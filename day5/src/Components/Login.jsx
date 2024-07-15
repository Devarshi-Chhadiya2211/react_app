import React, { useState } from 'react'
import '../index.css'



function Login() {

    const [state,setState] = useState("sin")
    const [sinName,setSinName] = useState("")
    const [sinEmail,setSinEmail] = useState("")
    const [sinPass,setSinPass] = useState("")
    const [arr,setArr] = useState([])
    const [logEmail,setLogEmail] = useState("")
    const [logPass,setLogPass] = useState("")
    // const [data,setData] = useState("")

    const signUp = () => {
      let obj = {
        user : sinName,
        email : sinEmail,
        pass : sinPass
      }
      setArr([...arr,obj])
    }
    console.log(arr);

    const logIn=()=>{
      let data = arr.filter((el)=>{
        return(el.email == logEmail && el.pass == logPass)
      })
        if(data.length>0){
          alert("LOGIN SUCCESSFUL...")
          // return el;
        }
        else{
          alert("INCORRECT...")
        }
    }
    

  return (
    <div>
      {
        state == "sin" ?
      <div>
        <h1>HELLO THERE, <b>SIGNUP HERE</b></h1><hr />
        <input type='text' name="" placeholder='username..' onChange={(e)=>setSinName(e.target.value)}/><br />
        <input type='email' name=""  placeholder='email..'onChange={(e)=>setSinEmail(e.target.value)}/><br />
        <input type='password' name=""  placeholder='password..' onChange={(e)=>setSinPass(e.target.value)}/><br /><br />
        <input type='checkbox' id='box'/> <i> I accept BlueStone Terms of Service and Privacy Policy. </i><br /><br />
        <button id='btn' onClick={signUp}>CREATE ACCOUNT</button>
        <h4>Already have an account? <span href="" onClick={()=>setState("log")}>Login Here</span></h4>
      </div> :
       <div>
       <h1>WELCOME BACK, <b>LOGIN HERE</b></h1><hr />
       <h4> <b>Please enter your valid email address and password below....</b></h4>
       <input type='email' name="" placeholder='email..' onChange={(e)=>setLogEmail(e.target.value)}/><br />
       <input type='password' name="" placeholder='password..' onChange={(e)=>setLogPass(e.target.value)}/><br /><br />
        <button id='btn1' onClick={logIn}>SUBMIT</button>
       {/* <input type='submit' id='btn' onClick={logIn}/><br /> */}
       <h4>Don't have an account with us? <span href="" onClick={()=>setState("sin")}>Signup Here</span></h4>
     </div>
    }
    </div>
  )
}

export default Login 
