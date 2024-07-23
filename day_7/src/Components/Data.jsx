import React, { useState } from 'react'
import DataList from './DataList'
import {v4} from 'uuid'
function Data() {
    const [obj,setObj] = useState({
        id :v4(),
        title : "",
        price : "",
        img : "",
        des : ""
    })
    const [data,setData] = useState([])
    const [dis,setDis] = useState(false)
    const [id,setId] = useState("")
    const handleChange = (e)=>{
      
        setObj({...obj, [e.target.name] : e.target.value})
    }
  const handleClick = ()=>{
    
    setData([...data,obj])
    setObj({
         id :v4(),
        title : "",
        price : "",
        img : "",
        des : ""
    })
  }  

   const handleDelete = (dl)=>{
     
    let d = data.filter((el)=>{
      if(el.id != dl){
        return el;
      }
     })
    setData(d)

   }

   const handleEdit = (ed)=>{
       setDis(true)
       setId(ed)
       data.forEach((el)=>{
          if(el.id == ed){
             setObj(el)
          }
       })
   }
   const handleUpdate = ()=>{
      let d = data.map((el)=>{
        if(el.id == id){
           return {...el,...obj}
        }else{
          return el;
        }
      })
      setData(d)
      setDis(false)
      setObj({
        id : v4(),
       title : "",
       price : "",
       img : "",
       des : ""
   })
   }
   
  return (
    
    <div>
        <input type="text" value={obj.title} placeholder='Title' name='title' onChange={handleChange} /><br /><br />
        <input type="text" value={obj.price} placeholder='Price' name='price'  onChange={handleChange} /><br /><br />
        <input type="text" value={obj.img} placeholder='ImageURL' name='img'  onChange={handleChange} /><br /><br />
        <input type="text" value={obj.des} placeholder='Description' name='des'  onChange={handleChange} /><br /><br />
        <button onClick={handleClick} id='btn1'>Submit</button><br />
        <button onClick={handleUpdate} style={{ display : dis ? "inline-block" : "none"}}><i class="fa-solid fa-upload"></i></button>
       {data== null ? <h1>Loading.........</h1> : <DataList del={handleDelete} arr={data} edit={handleEdit}/>}
    </div>
  )
}

export default Data