import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="w-screen">
      <div className=" p-2 text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome className="text-sky-300 m-4" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center rounded-2xl p-4 bg-gray-100 w-4/5 lg:flex justify-center w-1/2">
          <div className="rounded-l">
            <img
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png"
              className="w-40 h-40"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row w-auto my-2 justify-center">
              <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                Nombre:
              </span>
              <input
                className="text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1 "
                type="text"
                value={user.displayName}
                readonly
              />
            </div>

            <div className="flex flex-row w-auto my-2 justify-center">
              <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                Correo:
              </span>
              <input
                className="text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1"
                type="text"
                value={user.email}
                readonly
              />
            </div>

            <div className="flex flex-row w-auto my-2 justify-center">
              <span className="text-sm w-32 border bg-sky-300 font-bold border-2 rounded-l px-4 py-2 text-white">
                Sobre mí:
              </span>
              <p className="bg-white text-sm w-full px-4 cursor-default border-gray-300 focus:outline-none  rounded-md rounded-l-none shadow-sm -ml-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget laoreet diam, id luctus lectus.
              </p>
            </div>

            {/* <div className="">
              <h3 className="font-bold uppercase"> Sobre mi:</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                eget laoreet diam, id luctus lectus.
              </p>
            </div> */}

            <div className="flex flex-col items-center">
              <button
                className="w-full my-4 mr-4 bg-sky-300 
                        hover:bg-sky-400 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48"
                type="button"
              >
                Editar Perfil
              </button>
              <button
                className="w-full mb-4 mr-4 bg-red-400 
                        hover:bg-red-500 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48"
                type="button"
              >
                Eliminar Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
