import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: onExpire });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>Time for being real</h1>
      {/* <p>Timer Demo</p> */}
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 120);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}

export default MyTimer;