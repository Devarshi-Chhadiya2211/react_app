import React from 'react'

function DataList(props) {
  return (
    <div class="justify-content-evenly ">
        {
           props.arr && props.arr.map((el)=>{
                return (
                    <div >
                     <div key={el.id}>
                        <img src={el.img} alt="" width={"150px"} />
                        <h3>{el.title} - ₹{el.price}</h3>
                        <p>{el.des}</p>
                        <button onClick={()=>props.edit(el.id)}><i class="fa-solid fa-pen"></i></button>  &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>props.del(el.id)}><i class="fa-solid fa-trash"></i></button>
                     </div>
                     </div>
                )
            })
        }
    </div>
  )
}

export default DataList