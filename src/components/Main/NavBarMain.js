import React from "react";
import { Link } from "react-router-dom";

const NavBarMain = () => {
  return (
    <nav className="bg-gray-100 p-6  ">
      <div className="w-full justify-center
      lg:flex lg:justify-end lg:w-auto">
        <div className="text-xl flex flex-row items-center justify-center 
        lg:justify-end ">
          <Link
            to="/SignUp"
            className=" mt-4 lg:inline-block
             lg:mt-0 ml-10 text-gray-600 cursor-pointer"
          >
            Regístrate
          </Link>
          <Link
            to="/AboutUs"
            className=" mt-4 lg:inline-block 
            lg:mt-0 ml-10 text-gray-600 cursor-pointer"
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarMain;
