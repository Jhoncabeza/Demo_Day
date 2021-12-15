import React from "react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="">
      <div className="p-5 text-3xl">
        <Link to="/" className="float-left">
          <BiArrowBack />
        </Link>
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Sobre Nosotros
      </h1>
      <div className="flex flex-col items-center justify-center ">
        <div className="h-90v flex flex-col items-center justify-center md:p-8 grid grid-cols-2">
          <div className="md:p-4">
            <img
              className="object-contain"
              src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638056481/Mind%20Balance%20App/group_team_aaxbbh.jpg"
              alt="About us"
            />
          </div>

          <div className="md:p-4">
            <p className="text-xl text-justify text-gray-600">
              Mind Balance, un proyecto que nace desde la empatía: Somos
              conscientes de los retos que supone la presión académica y la
              importacia de cuidar la salud mental en todos las etapas de una
              persona, por ello, construimos una aplicación que permiten desde
              la auto gestión, un mejor paso por la academia.
            </p>
            <p className="text-xl text-justify text-gray-600"></p>

            <p className="text-xl text-justify text-gray-600">
              La mejor herramienta para liberar tu mente: Enfocados en asistir a
              nuestros usuarios en el desarrollo de autodisciplina y la
              construcción de hábitos saludables, traemos a ellos un conjunto de
              artículos y herramientas que tienen como propósito mejorar la
              productividad y ayudar a gestionar el estrés.
            </p>
            <div className="flex flex-row items-center justify-end">
              <a href="https://www.linkedin.com/company/academia-geek-bootcamp/">
                <SiLinkedin className="mr-6 text-3xl text-gray-600" />
              </a>
              <a href="https://www.instagram.com/laacademiageek/">
                <SiInstagram className="mr-6  text-3xl text-gray-600" />
              </a>
              <a href="https://github.com/academia-geek">
                <SiGithub className="mr-6 text-3xl text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
