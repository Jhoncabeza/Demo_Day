import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authentication } from "../../firebase/firebase";
import {
  AiOutlineBook,
  AiOutlineTool,
  AiOutlineSchedule,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleLogOut = () => {
    authentication.signOut();
  };

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className="relative min-h-screen md:flex">

      {/* mobile menu bar */}
      <div className="bg-gradient-to-r from-purple-500 to-sky-300 text-white flex justify-between md:hidden">
        <Link className="block p-4 text-white font-bold" to="/">
          <img
            className="w-1/5"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png"
            alt="logo"
          />
        </Link>
        <button className="mobile-menu-button mr-5">
          <AiOutlineMenu className="text-4xl" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className="bg-gradient-to-r from-purple-500 to-sky-300 text-white w-64 space-y-6 font-bold py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
      >
        <Link className="text-white flex items-center mt-4 space-x-2" to="/home">
          <img
            className="w-17 h-17"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png"
            alt="logo"
          />
        </Link>
        <Link
          to="/Blogs"
          className="flex block py-2 px-4 text-gray-50 cursor-pointer"
        >
          <AiOutlineBook className="text-lg mt-1 mr-1" />
          Blogs
        </Link>
        <Link
          to="/Tools"
          className="flex block py-2 px-4 text-gray-50 cursor-pointer"
        >
          <AiOutlineTool className="text-lg mt-1 mr-1" />
          Herramientas
        </Link>
        <Link
          to="/Schedule"
          className="flex block py-2 px-4 text-gray-50 cursor-pointer"
        >
          <AiOutlineSchedule className="text-lg mt-1 mr-1" />
          Agenda tu cita
        </Link>
        <Link
          to="/Profile"
          className="flex block py-2 px-4 text-gray-50 cursor-pointer"
        >
          <AiOutlineUser className="text-lg mt-1 mr-1" />
          Perfil
        </Link>
        <button
          onClick={handleLogOut}
          className="flex block py-2 px-4 text-gray-50 font-bold cursor-pointer"
        >
          <AiOutlineLogout className="text-lg mt-1 mr-1" />
          Cerrar sesion
        </button>
      </div>

    </div>

    // <div>
    //   <nav className="h-10v flex flex-row bg-gradient-to-r from-purple-500 to-sky-300 p-6">
    //     <ul className="text-xl list">

    //       <button onClick={handleLogOut} className="btnLogOut text-xl" >
    //         Cerrar sesión
    //       </button>
    //       <button className="btnMenu"><AiOutlineMenu /></button>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default NavBar;
