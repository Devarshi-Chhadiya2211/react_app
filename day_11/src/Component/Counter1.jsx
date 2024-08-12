import React, { useState } from 'react'

function Counter1() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={DEC}>-</button>
        <button onClick={INC}>+</button>
    </div>
  )
}

export default Counter1