import React, { useState } from 'react';
import './timerInput.css';

interface TimerInputProps {
  inputCallBack: (inputTime: string) => void;
}

function TimerInput({ inputCallBack } : TimerInputProps) {
    const [time, setTime] = useState("00:00");
  
    function handleTimeChange(e:any) {
        const value = e.target.value.replace(/\D/g, '').slice(-4);
        console.log(value)
      
        if (value.length <= 2) {
          setTime(value.padStart(2, '0'));
        } else if (value.length === 3) {
          setTime(`${value.slice(-3, -2)}:${value.slice(-2)}`);
        } else {
          setTime(`${value.slice(-4, -2)}:${value.slice(-2)}`);
        }
        inputCallBack(value)
      }
      
  
    return (
          <input className='timer-input' type="text" pattern="[0-5][0-9]:[0-5][0-9]" placeholder='Add Time'  value={time} onChange={handleTimeChange} />
    );
}

export default TimerInput;
