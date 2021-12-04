import React from "react";
import { Link } from "react-router-dom";
import { authentication } from "../../firebase/firebase";

const NavBar = () => {
  
  const handleLogOut = () => {
  authentication.signOut()
}

  return (
    <div className="h-10v flex flex-row bg-gradient-to-r from-purple-500 to-sky-300 p-6">
      <div className="flex flex-row items-center justify-between px-8 h-18 w-full">
        <div className="text-xl ">
          <Link
            to="/Tools"
            className=" mt-4 mt-0 ml-10 text-gray-50 cursor-pointer"
          >
            Herramientas
          </Link>
          <Link
            to="/Blogs"
            className=" mt-4 mt-0 ml-10 text-gray-50 cursor-pointer"
          >
            Blogs
          </Link>
          <Link
            to="/Schedule"
            className=" mt-4 mt-0 ml-10 text-gray-50 cursor-pointer"
          >
            Agenda tu cita
          </Link>
          <Link
            to="/Profile"
            className=" mt-4 mt-0 ml-10 text-gray-50 cursor-pointer"
          >
            Perfil
          </Link>
        </div>
        <div className>
          <button onClick={handleLogOut} className="text-xl py-2 px-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 cursor-pointer hover:bg-white flex" >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;