import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="h-auto lg:h-100v">
      <div className="p-5 text-3xl">
        <Link to="/" >
          <BiArrowBack />
        </Link>
        
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
          Sobre Nosotros
        </h1>
      <div className="flex flex-col items-center justify-center lg:flex-row mt-4">
        <div className="flex flex-col items-center justify-center lg:flex-row w-screen">

          <div className="p-8 lg:w-1/2">
            <p className="text-center text-xl  text-gray-600">
              Mind Balance, un proyecto que nace desde la empatía: Somos
              conscientes de los retos que supone la presión académica y la
              importancia de cuidar la salud mental en cualquier etapa de la
              vida, por ello, construimos una aplicación que permite mediante 
              el conjunto de artículos y herramientas asistir a nuestros usuarios 
              en el desarrollo de autodisciplina, construcción de hábitos 
              saludables, mejorar la productividad y la gestion de emociones 
              negativas, mejorando así la calidad de vida de nuestros usuarios.
            </p>
            <div className="flex flex-row items-center justify-center pt-8 mt-10">
              <div className=" text-center font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
                <img className="" src="https://res.cloudinary.com/dso8ht3px/image/upload/v1639768321/demoday/Jhon_pdl3g6.jpg" alt="Jhon" />
                <h1>Jhon Cabeza</h1>
                <h1>Tech Lead</h1>
                <h1>Desarollador Front-End</h1>
              </div>

              <div className="text-center font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
                <img className="" src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639765358/Mind%20Balance%20App/d1752567-adbf-4761-81f7-13ef4a7cb470_jz8zbd.jpg" alt="Alejandra" />
                <h1>Alejandra Sánchez</h1>
                <h1>Creative Director</h1>
                <h1>Desarolladora Front-End</h1>
              </div>

              <div className="text-center font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
                <img className="" src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639765371/Mind%20Balance%20App/5b998f7f-230e-4246-829a-612a24ce5bb3_ronypo.jpg" alt="Daniela" />
                <h1>Daniela Rivera</h1>
                <h1>Scrum Master</h1>
                <h1>Desarolladora Front-End</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;