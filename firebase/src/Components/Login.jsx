import React, { useEffect, useState } from 'react'
import '../assets/login.css' 
import { Link, useNavigate } from 'react-router-dom'
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../Firebase/firebase';


function Login() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("")
  const [d,setD] = useState([])
  const [user,setUser] = useState(null)
  const UserCollection = collection(db,"users")
  const dispatch  = useDispatch()
  const navigate =  useNavigate()
  const state = useSelector((s)=>s.UserReducer)
  console.log(state)
  useEffect(()=>{
      async function getData(){
          let data = await getDocs(UserCollection)
          let val = data.docs.map((el)=>{
              return {id : el.id , ...el.data()}
          })
          setD(val)
      }
      getData()
  },[])
  const handleSubmit  = (e)=>{
      e.preventDefault()
      let a = d.filter((el)=>{
          return el.email == email && el.pass == pass
      })
      if(a.length > 0){
          alert("Login Successfull")
          navigate('/')
      }else{
          alert("Login Unsuccesfull")
          alert("Do signup first")
          navigate('/signup')
      }
  }

  return (

    <div class="wrapper">
        <div class="title-text">
            <div class="title login">Login Form</div>
            <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slide" id="login" checked/>
                <input type="radio" name="slide" id="signup"/>
                <label for="login" class="slide login">Login</label>
                <label for="signup" class="slide signup">Signup</label>
                <div class="slide-tab"></div>
            </div>
            <div class="form-inner">
                <form onSubmit={handleSubmit} class="login">
                    <div class="field">
                        <input type="text" placeholder="Email Address" required value={email} name='email' onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div class="field">
                        <input type="password" placeholder="Password" required value={pass} name='password' onChange={(e)=>setPass(e.target.value)} />
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div class="field">
                        <input type="submit" value="Login"/>
                    </div>
                    <div class="signup-link">Not a member?<br/>
                        <Link to={'/signup'}>Signup Now</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
