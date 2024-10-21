// import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../ReduxFolder/product/action'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
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
      <div class="card">
  <img src={el.img} class="card-img-top" alt={el.title} />
  <div class="card-body">
    <h4>{el.price}</h4>
    <h5 class="card-title">{el.title}</h5>
    <p class="card-text">{el.cat}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <button onClick={()=>navigate(`/allpro/edit/${el.id}`)}> Edit</button>
    <button onClick={()=>handleDelete(el.id)}>Delete</button>
  </div>
</div>
     )
    })
  }
</div>
</>
)}

export default AllProduct
