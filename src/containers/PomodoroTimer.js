import React from "react";
import {useEffect, useState} from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import PomodoroPic from "../components/Tools/Pomodoro/PomodoroPic";

const PomodoroTimer = () => {
  
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

useEffect(() => {
    let interval = setInterval(() => {
        clearInterval(interval);
        
        if (seconds === 0) {
          if (minutes !== 0){
              setSeconds (59);
              setMinutes (minutes - 1);
          } else {
              let minutes = displayMessage ? 24 : 9;
              let seconds = 59;

              setSeconds(seconds);
              setMinutes(minutes);
              setDisplayMessage(!displayMessage);
          }
        } else {
            setSeconds (seconds - 1);
        }

    }, 1000);
}, [seconds, minutes, displayMessage]);

const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div>
      <div className="p-5 text-3xl">
        <Link to="/Tools" className="float-left">
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
        Reloj Pomodoro 
      </h3>
      <PomodoroPic/>
      <div className="pomodoro">
        <div className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
            {displayMessage && <div>¡Descanso! Nueva sesión comenzará en:</div>}
        </div>
        <div className="font-bold text-5xl text-gray-700 text-center">
            {timerMinutes}:{timerSeconds}</div>
        </div>
    </div>
  );
};

export default PomodoroTimer;
