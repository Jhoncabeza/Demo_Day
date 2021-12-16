import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from '../components/Main/Footer';

const Tools = () => {
  return (
    <div className="mb-10">
      <div className="text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome className="text-sky-300 m-4" />
        </Link>
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Herramientas
      </h1>
      <div className="flex flex-col justify-center items-center w-screen lg:flex-row flex-wrap w-2/4">
        <div className="flex flex-col justify-center items-center py-8 w-2/4 lg:w-2/4">
          <img
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638822359/Mind%20Balance%20App/meditationillustration_g7luib.png"
            alt=""
            className="h-40v object-contain"
          />
          <Link to="/BreathingExercises">
            <h1 className="text-purple-500 text-xl text-center py-4">Técnicas de Respiración</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8 w-2/4 lg:w-2/4">
          <img
            className="h-40v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638806900/Mind%20Balance%20App/moodtrackerillustration_jq4wxd.jpg"
            alt=""
          />
          <Link to="/MoodTracker">
            <h1 className="text-purple-500 text-xl text-center py-4">Mood Tracker</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8 w-2/4  lg:w-2/4">
          <img
            className="h-40v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295407/Mind%20Balance%20App/book-right-and-wrong-by-oblik-studio_lluytd.png"
            alt=""
          />
          <Link to="/ToDoList">
            <h1 className="text-purple-500 text-xl text-center py-4">To Do List</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8 w-2/4 lg:lg:w-2/4">
          <img
            className="h-40v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638757519/Mind%20Balance%20App/Ilustracion1_irsp04.png"
            alt=""
          />
          <Link to="/PomodoroTimer">
            <h1 className="text-purple-500 text-xl text-center py-4">Pomodoro Timer</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center py-8 w-2/4 lg:lg:w-2/4">
          <img
            className="h-40v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638823718/Mind%20Balance%20App/maps_hl30nj.png"
            alt=""
          />
          <Link to="/Location">
            <h1 className="text-purple-500 text-xl text-center py-4  ">Puntos de Apoyo Psicológico</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tools;
