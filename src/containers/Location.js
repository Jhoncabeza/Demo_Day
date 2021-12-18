import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div className="h-100v">
      <div className="p-5 text-5xl">
        <Link to="/Tools" className="text-sky-300">
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
          Puntos de Apoyo Psicológico
        </h3>
      <div className="flex flex-col items-center justify-center">
        <iframe
          className="my-4"
          title="map1"
          src="https://www.google.com/maps/d/u/0/embed?mid=1iJXEzF7jKAy-bS2YQw0F9Dr5r79_PPJp&ehbc=2E312F"
          width="640"
          height="480"
          frameBorder="0"
          allowFullScreen=""
        ></iframe>
        <p className="m-10 text-center">
          El programa de Escuchaderos es una iniciativa de la alcaldía de
          Medellín cuyo fin es ofrecer atención y orientación psicológica de
          forma gratuita a los habitantes de las diferentes comunas y
          corregimientos de la ciudad. En el mapa encontrarás la ubicación de
          los principales escuchaderos por comunas en la ciudad y sus
          respectivos horarios.
        </p>
      </div>
    </div>
  );
};

export default Location;
