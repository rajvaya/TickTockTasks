import React, { useState } from 'react';
import './timerInput.css';

function TimerInput({ onSubmit } : any) {
    const [time, setTime] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
  
      // Validate that the time is in the "MM:SS" format
      const timeRegex = /^([0-5][0-9]):([0-5][0-9])$/;
      if (!timeRegex.test(time)) {
        alert('Please enter a time in the format "MM:SS"');
        return;
      }
  
      onSubmit(time);
    }
  
    function handleTimeChange(e) {
        const value = e.target.value.replace(/\D/g, '').slice(-4);
      
        if (value.length <= 2) {
          setTime(value.padStart(2, '0'));
        } else if (value.length === 3) {
          setTime(`${value.slice(-3, -2)}:${value.slice(-2)}`);
        } else {
          setTime(`${value.slice(-4, -2)}:${value.slice(-2)}`);
        }
      }
      
  
    return (
          <input className='timer-input' type="text" pattern="[0-5][0-9]:[0-5][0-9]" placeholder='Add Time'  value={time} onChange={handleTimeChange} />
    );
}

export default TimerInput;
