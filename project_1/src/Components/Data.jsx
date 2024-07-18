import React from 'react'

function Data({arr}) {
  return (
    <div className='box'>
        {
            arr.map((el)=>{
                return (
                      <div className='innerbox'>
                         <img src={el.image} alt={el.title} width={"300px"} height={"300px"}/>
                         <h2>{el.title} <br /> Price: ${el.price}</h2>
                         <h6>{el.description}</h6>
                      </div>
                )
            })
        }
        
    </div>
  )
}

export default Data