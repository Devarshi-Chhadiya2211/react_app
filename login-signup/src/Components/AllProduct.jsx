// import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../ReduxFolder/product/action'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import '../assets/login.css'
import { useNavigate } from 'react-router-dom'


const AllProduct = () => {

    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    const navigate = useNavigate()
    console.log(state)
    useEffect(()=>{
       dispatch(getData)
    },[])
    const handleDelete = async(id)=>{
         let data = doc(db,"products",id)
         await deleteDoc(data)
         alert("Data Deleted Successfully")
         dispatch(getData)
    }

  return (
    <> <div>
        {   state.product.map((el)=>{
        return(
      <div class="card shadow p-3 mb-5 bg-body rounded">
  <img src={el.img} class="card-img-top" alt={el.title} width={250} height={200}/>
  <div class="card-body">
    <h4>{el.price}</h4>
    {/* <img src={el.img} alt="" /> */}
    <h5 class="card-title">{el.title}</h5>
    <p class="card-text">{el.cat}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <button className='edit' onClick={()=>navigate(`/editpage/edit/${el.id}`)}> Edit</button> &nbsp;&nbsp;
    <button className='del' onClick={()=>handleDelete(el.id)}>Delete</button>
  </div>
</div>
     )
    })
  }
</div>
</>
)}

export default AllProduct
