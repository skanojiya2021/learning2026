import "./styles.css";
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [watch, setWatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);
  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(false);
    timeInterval.current = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
  };

  const handleRestart = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setWatch(0);
  };

  const stopWatch = () => {
    setIsRunning(!isRunning);
    clearInterval(timeInterval.current);
  };
  return (
    <div className="App">
      <h1>Traffic signal</h1>
      <div>
        <p>{watch}s</p>
        <button onClick={handleStart}>start</button>
        <button onClick={stopWatch}>stop</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}
