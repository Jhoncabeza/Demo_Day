import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div>
      <div className="text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome className="text-sky-300 m-4"/>
        </Link>
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Herramientas
      </h1>
      <div className="flex flex-wrap">
        <div className="flex flex-col justify-center items-center py-8">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295407/Mind%20Balance%20App/cat-video-games-controller-plant-by-oblik-studio_rflr97.png"
            alt=""
            className="w-1/4"
          />
          <Link to="/BreathingExercises">
            <h1 className="text-purple-500 text-xl py-4">
              Ejercicios de respiración
            </h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <img
            className="w-1/4"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/girl-sitiing-on-table-conducting-an-interview-by-oblik-studio_ztdy85.png"
            alt=""
          />
          <Link to="/MoodTracker">
            <h1 className="text-purple-500 text-xl py-4">Mood Tracker</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <img
            className="w-1/4"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295407/Mind%20Balance%20App/book-right-and-wrong-by-oblik-studio_lluytd.png"
            alt=""
          />
          <Link to="/ToDoList">
            <h1 className="text-purple-500 text-xl py-4">To Do List</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8">
          <img
            className="w-1/4"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638757519/Mind%20Balance%20App/Ilustracion1_irsp04.png"
            alt=""
          />
          <Link to="/PomodoroTimer">
            <h1 className="text-purple-500 text-xl py-4">Pomodoro Timer</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
