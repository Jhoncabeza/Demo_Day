import React from "react";
import { SiFacebook, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";


const AboutUs = () => {
    return (
        <div className="">
            <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
                Sobre Academia Geek
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
                            Academia Geek es un campo de entrenamiento en Desarrollo Web que
                            se basa en retos reales. Su principal objetivo es lograr la
                            empleabilidad en el menor tiempo posible.
                        </p>
                        <p className="text-xl text-justify text-gray-600">
                            Como miembro de Academia Geek el estudiante hará parte de un
                            proyecto de desarrollo real, y construirá un portafolio
                            profesional que será muy útil para encontrar empleo. El
                            entrenamiento incluye formación técnica, Design Thinking,
                            preparación para el empleo y habilidades para la vida (Soft
                            Skills).
                        </p>

                        <p className="text-xl text-justify text-gray-600">
                            La Academia cuenta con el respaldo de Makaia para el
                            relacionamiento con empresas y apoyo social y Agile Innova en la
                            parte técnica y de entrenamiento.
                        </p>
                        <div className="flex flex-row items-center justify-end">
                            <a href="https://www.linkedin.com/company/academia-geek-bootcamp/"><SiLinkedin className="mr-6 text-3xl text-gray-600" /></a>
                            <a href="https://www.instagram.com/laacademiageek/"><SiInstagram className="mr-6  text-3xl text-gray-600" /></a>
                            <a href="https://github.com/academia-geek"><SiGithub className="mr-6 text-3xl text-gray-600" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
