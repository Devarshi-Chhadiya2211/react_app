// src/Timer.js
import React, { useState, useEffect } from 'react';
// import './App.css'; // Reuse the existing CSS file for styling

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // useEffect to handle the timer logic
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Start the timer
  const startTimer = () => {
    setIsActive(true);
  };

  // Stop the timer
  const stopTimer = () => {
    setIsActive(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">{new Date(time * 1000).toISOString().substr(11, 8)}</h1>
      <div className="timer-buttons">
        <button className="timer-button" onClick={startTimer}>
          Start
        </button>
        <button className="timer-button" onClick={stopTimer}>
          Stop
        </button>
        <button className="timer-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
