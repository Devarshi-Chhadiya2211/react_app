// import React from 'react'
import '../assets/login.css' 
import { Link } from 'react-router-dom'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase/firebase';


function Signup() {

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("")
  const UserCollection = collection(db,"users")
  const [d,setD] = useState([])
  const navigate =  useNavigate()
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
  const handleSubmit = async (e)=>{
    e.preventDefault()
    let a = d.filter((el)=>{
      return el.email == email
    })

    let obj = {
      email,
      pass
    }
    if(a.length > 0){
      alert("User alerady registered")
    }else{

    await addDoc(UserCollection,obj)
    alert("User Signup Successfully")
    
    }
    navigate("/login")
  }

  return (
   
    <div class="wrapper">
        <div class="title-text">
            <div class="title login">Signup Form</div>
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

                <form action="#" class="signup" onSubmit={handleSubmit}>
                    <div class="field">
                        <input type="text" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}  required/>
                    </div>
                    <div class="field">
                        <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}  required/>
                    </div>
                    <div class="field">
                        <input type="submit" value="Signup" required/>
                    </div>
                    <div class="signup-link">Already have an account<br/>
                        <Link to={'/login'}>Login Now</Link> 
                    </div>
                  </form>
            </div>
        </div>
    </div>

  )
}

export default Signup
