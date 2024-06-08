import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTotalSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div>
      <h1>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</h1>
    </div>
  );
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

export default Timer;
