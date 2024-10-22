import { collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { addData } from '../ReduxFolder/product/action';
import { useDispatch, useSelector } from 'react-redux';
import '../assets/login.css' 
import { useNavigate } from 'react-router-dom';

function Addproduct() {
    const navigate= useNavigate()
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [img,setImage] = useState("")
    const [cat,setCat] =useState("")
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    console.log(state)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {
            title,
            price,
            cat,
            img
        }
        dispatch(addData)(obj)
        alert("product is added :)")

        navigate('/allpro')
    }
 
    return (

    <>  
    <div class="wrapper">
    <div class="title-text">
        <div class="title login">Add Product</div>
        <div class="title signup">Add Product</div>
    </div>
        <div class="form-inner">
            <form class="login" onSubmit={handleSubmit}>
                <div class="field">
                <input type="text" placeholder='title' value={title} name='title' onChange={(e)=>setTitle(e.target.value)}/><br /><br />
                </div>

                <div class="field">
                <input type="text" placeholder='category' value={cat} name='cat' onChange={(e)=>setCat(e.target.value)}/><br /><br />
                </div>
   
                <div class="field">
                    {/* <img src="" alt="" /> */}
                <input type="text" placeholder='price' value={price} name='price' onChange={(e)=>setPrice(e.target.value)}/><br /><br />
                </div>
                
                <div class="field">
                <input type="text" placeholder='imgURL' value={img} name='img' onChange={(e)=>setImage(e.target.value)}/><br /><br />
                </div>
   
                <div class="field">
                    <input type="submit" value="Add-product"/>
                </div>
            </form>
        </div>
    </div>

    </>
  )
}

export default Addproduct
