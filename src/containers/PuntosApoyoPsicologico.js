import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const PuntosApoyoPsicologico = () => {
  return (
    <div>
           <div className="p-5 text-3xl">
        <Link to="/Tools" className="float-left">
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
        Puntos de Apoyo Psicológico
      </h3>
      <div className="flex justify-center items-center w-screen">
        <div className="w-1/2 flex justify-center items-center">Aquí va el mapa</div>
        <div className="w-1/2 flex justify-center items-center">
          <p className="mx-10 text-justify">
            El programa de Escuchaderos es una iniciativa de la alcaldía de
            Medellín cuyo fin es ofrecer atención y orientación psicológica de
            forma gratuita a los habitantes de las diferentes comunas y
            corregimientos de la ciudad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PuntosApoyoPsicologico;
