import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Schedule = () => {
    return (
        <div>
            <div className="p-2 text-5xl text-gray-600">
                <Link to="/Home"><FaHome /></Link>
                <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">Agenda tu cita</h1>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center justify-center w-screen md:w-1/2">
                    <div className="flex items-center ">
                        <div className="container mx-auto">
                            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                                <div className="text-center">
                                    <p className="mt-0 text-gray-400 dark:text-gray-400">Llena el siguiente formulario para comunicarte con nosotros.</p>
                                </div>
                                <div className="m-7">
                                    <form id="form">
                                        <div className="mb-6">
                                            <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre completo</label>
                                            <input type="text" name="name" id="name" placeholder="Ana Pérez" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                        <div className="mb-6">
                                            <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Correo electrónico</label>
                                            <input type="email" name="email" id="email" placeholder="anaperez@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                        <div className="mb-6">

                                            <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Número de teléfono</label>
                                            <input type="text" name="phone" id="phone" placeholder="+57 312 345 6789" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                        </div>
                                        <div className="mb-6">
                                            <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Escribe tu mensaje</label>

                                            <textarea rows="5" name="message" id="message" placeholder="Tu mensaje" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                        </div>
                                        <div className="mb-6">
                                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                                        </div>
                                        <p className="text-base text-center text-gray-400" id="result">
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center p-5 w-screen md:w-1/2">
                    <img  src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/girl-sitting-on-armchair-with-laptop-by-oblik-studio_vx9kus.png" alt="girl in sofa" />
                </div>
            </div>
        </div>
    )
}

export default Schedule;