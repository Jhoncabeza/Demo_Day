import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-purple-500 to-sky-300 p-6">
            <div className="flex items-center flex-shrink-0 text-trueGray-50 mr-6"></div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white-200 border-white-200 hover:text-purple hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow">
                    <Link to="/"
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-50 cursor-pointer"
                    >
                        Inicio
                    </Link>
                    <Link to="/Tools"
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-50 cursor-pointer"
                    >
                        Herramientas
                    </Link>
                    <Link to="/Blog"
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-50 cursor-pointer"
                    >
                        Blog
                    </Link>
                    <Link to="/Schedule"
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-50 cursor-pointer"
                    >
                        Agenda tu cita
                    </Link>
                    <Link to="/Profile"
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-50 cursor-pointer"
                    >
                        Perfil
                    </Link>
                </div>
                <div>
                    <li
                        href="#"
                        className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 cursor-pointer hover:bg-white mt-4 lg:mt-0"
                    >
                        Cerrar sesión
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
