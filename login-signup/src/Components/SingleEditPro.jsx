import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../ReduxFolder/product/action';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

function SingleEditProduct() {
    const [state,setState] = useState({
        title : "",
        price : "",
        img : "",
        cat : ""
    })
    const navigate = useNavigate()
    // const [single,setSingle] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        async function getData(){
            let a = doc(db,"products",id)
            let d  = await getDoc(a)
            console.log(d)
            if(d.exists()){
               setState(d.data())
            }
        }
        getData()
     },[])
     const handleChange = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
     }
    const handleSubmit = async (E)=>{
        E.preventDefault()
        let data = doc(db,"products",id);
        await updateDoc(data,state)
        navigate("/allpro")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input value={state.title} type="text" name='title'  placeholder='Title'  onChange={handleChange}/>
             <input value={state.cat} type="text" name='cat'  placeholder='Category' onChange={handleChange}/>
             <input type="text" name='price' value={state.price}  placeholder='Price'  onChange={handleChange}/>
             <input type="text" name='img' value={state.img} placeholder='ImageUrl' onChange={handleChange} />
             <input type="submit" />
        </form>
    </div>
  )
}

export default SingleEditProduct