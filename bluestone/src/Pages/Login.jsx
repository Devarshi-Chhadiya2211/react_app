import React, { useState } from 'react'
import '../assets/login.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchapi } from './Redux/Store';
import { Link } from 'react-router-dom';

function Login() {

  const dispatch = useDispatch();
  const value = useSelector((s) => s);
  console.log(value);
  const [datas, setdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setdata({ ...datas, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchapi)(datas)

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>WELCOME BACK, <b>LOGIN HERE</b></h1><hr />
          <h4> <b>Please enter your valid email address and password below....</b></h4>
          <input type='email' name="email" value={datas.email} placeholder='email..' onChange={handleChange} /><br />
          <input type='password' name="password" value={datas.password} placeholder='password..' onChange={handleChange} /><br /><br />
          <button id='btn1' type='submit'>SUBMIT</button>
          <h4>Don't have an account with us? <span><Link to={'/SignUp'}>Signup Here</Link></span></h4>
        </form>
      </div>
    </>
  )
}

export default Login