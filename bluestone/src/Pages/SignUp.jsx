import React, { useState } from 'react'
import '../assets/login.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function SignUp() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
    
  };
  const handleSubmit = (e) => {
   
    e.preventDefault();
    if ( state.email == "" && state.password == "" && state.username == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill The Above details!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratsss...",
        text: "SignUp Succesfully...",
      });
      
      fetch(`https://mock-server-app-3ssy.onrender.com/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    setState({
      username: "",
      email: "",
      password: "",
    });
  };
    


  return (
   <>
   <div>
    <form onSubmit={handleSubmit}>
        <h1>HELLO THERE, <b>SIGNUP HERE</b></h1><hr />
        <input type='text' value={state.username} name="username" placeholder='username..' onChange={handleChange}/><br />
        <input type='email' name="email" value={state.email} placeholder='email..'onChange={handleChange}/><br />
        <input type='password' name="password" value={state.password} placeholder='password..' onChange={handleChange}/><br /><br />
        <input type='checkbox' id='box'/> <i> I accept BlueStone Terms of Service and Privacy Policy. </i><br /><br />
        <button id='btn' type='submit'>CREATE ACCOUNT</button>
        <h4>Already have an account? <span><Link to={'/Login'}>Login Here</Link></span></h4>
        </form>
        </div>
   </>
  )
}

export default SignUp