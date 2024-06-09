import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Timer({win}) {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(null);
  useEffect(() => {
    let intervalId;
    
      if(!win){
      intervalId = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
      return ()=> clearInterval(intervalId)
    // Clean up the interval on component unmount
   
  }, [win]); // Empty dependency array ensures the effect runs only once

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const whours = win? Math.floor(totalSeconds  / 3600): 0;
  const wminutes = win ? Math.floor((totalSeconds  % 3600) / 60):0;
  const wseconds = win ? totalSeconds  % 60: 0;
  
  

  return (
    <div>
    {!win ?(
      <Time>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</Time>
    ) : (
      <div className="modal-overlay">
         <div className="modal">
      Congratulations! <br></br>
        You've won in duration: {formatTime(whours)}:{formatTime(wminutes)}:{formatTime(wseconds)}!
        </div>
        </div>
    )}
    </div>

    )
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

export default Timer;

const Time = styled.h3 `
  // position: fixed;
  // top:-10;
  // left:50%;
  margin-bottom: 7px;
`

