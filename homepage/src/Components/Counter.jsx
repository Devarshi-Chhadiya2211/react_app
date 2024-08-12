// // src/Counter.js
// import React, { useState } from 'react';
// import ''

// function Counter() {
//   // Step 3: Initialize state for the counter
//   const [count, setCount] = useState(0);

//   // Step 4: Define functions to handle increment and decrement
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter: {count}</h1>
//       <button onClick={increment} style={{ marginRight: '10px' }}>
//         Increment
//       </button>
//       <button onClick={decrement}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default Counter;

// src/Counter.js
import React, { useState } from 'react';
// import './App.css';  // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
