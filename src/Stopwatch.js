import React, { useState, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    const seconds = (timeInSeconds % 60).toFixed(3).padStart(6, "0");

    return `${seconds}`;
  };

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }

    setIsRunning((prevState) => !prevState);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <div className="controls">
        <button onClick={startStopwatch}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
