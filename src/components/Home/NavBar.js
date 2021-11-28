import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-purple-500 to-sky-300 p-6">
            <div className="flex items-center flex-shrink-0 text-trueGray-50 mr-6"></div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow">
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
                    <Link to="/"
                        href="#"
                        className="inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 cursor-pointer hover:bg-white mt-4 lg:mt-0"
                    >
                        Cerrar sesión
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
