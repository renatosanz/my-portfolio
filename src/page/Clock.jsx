import React, { useState, useEffect, useRef } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());
  const targetTimeZone = 'America/Mexico_City';
  const [stateLabel, setStateLabel] = useState("Clock-label");
  
  const showLabel = () =>{
    setStateLabel("fade-in-out Clock-label");
    setTimeout(() => {
      setStateLabel("Clock-label")
    }, 5000);
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = {
    timeZone: targetTimeZone,
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(time);

  return (
    <div id="Clock" onClick={showLabel}>
      <header id="Clock-header">
        <div className={stateLabel}>
          <div id='label'>Time in México: </div>
        </div> 
        <span style={{fontWeight:700}} className='hover_text_Color ' id='Clock-value'>{formattedTime}</span>
      </header>
    </div>
  );
}

export default Clock;