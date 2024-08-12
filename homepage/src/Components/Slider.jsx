// src/Slider.js
import React, { useState } from 'react';
// import './Slider.css'; // We'll create this CSS file next

function Slider() {
  const [value, setValue] = useState(50); // Initial value of the slider

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
        id="mySlider"
      />
      <div className="value-display">Value: {value}</div>
    </div>
  );
}

export default Slider;
