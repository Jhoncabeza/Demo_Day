import React from "react";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import PomodoroPic from "../components/Tools/Pomodoro/PomodoroPic";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isRunning, setIsRuning] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (!isRunning) {
        return;
      }
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
    return () => clearInterval(interval);
  }, [seconds, minutes, displayMessage, isRunning]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div className="lg:h-200v xl:h-180v 2xl:h-140v">
      <div className="p-5 text-5xl">
        <Link to="/Tools" className="text-sky-300">
          <BiArrowBack />
        </Link>
        <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
          Reloj Pomodoro
        </h3>
      </div>
      <PomodoroPic />
      <div className="pomodoro">
        <div className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
          {displayMessage && <div>¡Descanso! Nueva sesión comenzará en:</div>}
        </div>
        <div className="font-bold text-5xl text-gray-700 text-center">
          {timerMinutes}:{timerSeconds}
        </div>
        <div className="buttoms flex justify-center gap-4 mt-8" >
          <button
            className="self-center w-32 bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setIsRuning(true)}
          >
            Iniciar
          </button>
          <button
            className="self-center w-32 bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setIsRuning(false)}
          >
            Detener
          </button>
          <button
            className="self-center w-32 bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              setMinutes(25);
              setSeconds(0);
            }}
          >
            Re-Iniciar
          </button>
        </div>
      </div>
      <div className="flex my-10">
        <div className="w-full">
          <h3 className="text-purple-500 text-2xl text-center font-bold my-8">
            ¿Qué es la técnica del Pomodoro?
          </h3>
          <p className="text-lg text-center px-6">
            El método Pomodoro consiste en dividir el trabajo en bloques de
            tiempo enfocados, normalmente 25 minutos, separados por un breve
            descanso de 10 minutos. Después de un bloque de cuatro secciones
            seguidas, se toma un descanso más largo, generalmente de 20 o 30
            minutos.
          </p>
          <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
            Beneficios del método Pomodoro:
          </h4>
          <ol className="text-lg px-8 my-8 text-justify">
            <p>
              <em>✔️ </em>Maneja las distracciones y controla tu tiempo.
            </p>
            <p>
              <em>✔️ </em>Incrementa la responsabilidad.
            </p>
            <p>
              <em>✔️ </em>Mejora la planificación de tareas.
            </p>
            <p>
              <em>✔️ </em>Mantiene la motivación.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
