import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Home'
import Addproduct from '../Components/Addproduct'
import AllProduct from '../Components/AllProduct'
import SingleEditPro from '../Components/SingleEditPro'

function Mainroutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addpro' element={<Addproduct/>}></Route>
        <Route path='/allpro' element={<AllProduct/>}></Route>
        <Route path='/editpage/edit/:id' element={<SingleEditPro/>}></Route>
      </Routes>
    </>
  )
}

export default Mainroutes
