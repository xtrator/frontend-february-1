import { useContext, useState, useRef } from "react";
import { PageContext } from "./PageContext";

export default function Stopwatch() {
  const page = useContext(PageContext);
  if (page !== 2) return <></>;

  const [startTime, setStartTime] = useState(Date.now());
  const [stopTime, setStopTime] = useState(Date.now());
  const intervalRef = useRef(null);

  function handleStart() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setStopTime(Date.now());
    intervalRef.current = setInterval(() => {
      setStartTime(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <p>my Time goes here {(startTime - stopTime) / 1000}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
