import "./styles.css";
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(false);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTimer(0);
  };
  const handleStop = () => {
    setIsRunning(!isRunning);
    clearInterval(timerRef.current);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>{timer}s</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
