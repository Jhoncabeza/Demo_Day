import React from "react";
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
  const handleLogOut = () => {
    authentication.signOut();
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (

    <nav className="w-full flex flex-wrap bg-gradient-to-r from-purple-500 to-sky-300 lg:flex-row">
      <div className="w-full flex flex-wrap  justify-between ">
        <div className="w-full flex justify-between lg:w-28 ">
          <img
            className="w-28"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png"
            alt="logo"
          />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AiOutlineMenu className="text-4xl" />
          </button>
        </div>
        <div className={"lg:flex flex-row pt-5" + (navbarOpen ? " flex flex-col w-full " : " hidden")}>
          
          <Link
            to="/Tools"
            className="flex justify-start py-2 px-4 text-gray-50 cursor-pointer "
          >
            <AiOutlineTool className="text-lg mt-1 mr-1" />
            Herramientas
          </Link>
          <Link
            to="/Schedule"
            className="flex justify-start py-2 px-4 text-gray-50 cursor-pointer "
          >
            <AiOutlineSchedule className="text-lg mt-1 mr-1" />
            Agenda tu cita
          </Link>
          <Link
            to="/Blogs"
            className="flex justify-start py-2 px-4 text-gray-50 cursor-pointer "
          >
            <AiOutlineBook className=" text-lg mt-1 mr-1" />
            Blogs
          </Link>
          <Link
            to="/Profile"
            className="flex justify-start py-2 px-4 text-gray-50 cursor-pointer "
          >
            <AiOutlineUser className="text-lg mt-1 mr-1" />
            Perfil
          </Link>
          <button
            onClick={handleLogOut}
            className="flex justify-start py-2 px-4 text-gray-50 cursor-pointer "
          >
            <AiOutlineLogout className="text-lg mt-1 mr-1" />
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>

  )
};

export default NavBar;

