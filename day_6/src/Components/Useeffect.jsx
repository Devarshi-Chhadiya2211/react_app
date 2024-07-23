import React, { useEffect, useState } from 'react'
import '../App'

function Useeffect() {
  
    const[state,setState] = useState(false)
    const[data,setData] = useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=> res.json())
        .then((res)=>{
          setData(res)
        })
        .catch((err)=>{
          console.log(err);
        })
    },[])
        console.log(data);

    return (
    <div className='box1' style={{display : "flex"}}>
      {
        data.map((el)=>{
          return (
            <div className='box'>
              <img src={el.image} alt="" width={200} height={200}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Useeffect