import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Tools = () => {
    return (
        <div>
            <div className="text-5xl text-gray-600">
                <Link to="/Home">
                    <FaHome />
                </Link>
            </div>
            <Link to="/BreathingExercises">
                <h1>Ejercicios de respiración</h1>
            </Link>

            <Link to="/MoodTracker">
                <h1>Mood Tracker</h1>
            </Link>

            <Link to="/ToDoList">
                <h1>To Do List</h1>
            </Link>

            <Link to="/PomodoroTimer">
                <h1>Pomodoro Timer</h1>
            </Link>

            
        </div>
    )
}

export default Tools;
