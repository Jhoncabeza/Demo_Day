import React from "react";
import { useEffect, useState } from "react";
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
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 9;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
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
      <PomodoroPic />
      <div className="pomodoro">
        <div className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
          {displayMessage && <div>¡Descanso! Nueva sesión comenzará en:</div>}
        </div>
        <div className="font-bold text-5xl text-gray-700 text-center">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
      <div className="flex my-10">
        <div className="w-1/2">
          <h3 className="text-purple-500 text-2xl text-center font-bold my-8">
            ¿Qué es la técnica del Pomodoro?
          </h3>
          <p className="text-lg text-justify px-6">
            El método Pomodoro consiste en dividir el trabajo en bloques de
            tiempo enfocados, normalmente 25 minutos, separados por un breve
            descanso de 5 minutos. Después de un bloque de cuatro secciones
            seguidas, se toma un descanso más largo, generalmente de 20 o 30
            minutos.
          </p>
          <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
            Beneficios del método Pomodoro:
          </h4>
          <ol className="text-lg px-8 my-8 text-justify">
            <p>
              <em>✔️</em>Maneja las distracciones y controla tu tiempo.
            </p>
            <p>
              <em>✔️</em>Incrementa la responsabilidad.
            </p>
            <p>
              <em>✔️</em>Mejora la planificación de tareas.
            </p>
            <p>
              <em>✔️</em>Mantiene la motivación.
            </p>
          </ol>
        </div>
        <div className="w-1/2">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639601381/Mind%20Balance%20App/pomodoro_infograf%C3%ADa_nqadj8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
