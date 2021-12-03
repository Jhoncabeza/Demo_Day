import React from "react";
import { Link } from "react-router-dom";

const NavBarMain = () => {
  return (
    <nav className=" bg-gray-100 p-6">
      <div className="flex  items-center flex-shrink-0 text-trueGray-50 mr-6"></div>
      <div className="justify-end w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl">
          <Link
            to="/SignUp"
            className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-600 cursor-pointer"
          >
            Regístrate
          </Link>
          <Link
            to="/AboutUs"
            className="block mt-4 lg:inline-block lg:mt-0 ml-10 text-gray-600 cursor-pointer"
          >
            Sobre Nosotros
          </Link>
        </div>
        <div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMain;
