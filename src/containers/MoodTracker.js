import React from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  BsEmojiSmile,
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiNeutral,
  BsEmojiDizzy
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

let url1 = "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639693996/Mind%20Balance%20App/istockphoto-1225805599-170667a_zcr2dn.jpg"
let url2 = "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639693987/Mind%20Balance%20App/istockphoto-1218747806-1024x1024_unc8q4.jpg"
let url3 = "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639693951/Mind%20Balance%20App/2720b753c8838dbcb311fe9a2192de8e_pwrvaf.jpg"
let url4 = "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639693951/Mind%20Balance%20App/istockphoto-1218747823-170667a_iaexhc.jpg"
let url5 = "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639693951/Mind%20Balance%20App/istockphoto-1218747859-170667a_i101ij.jpg"

const MoodTracker = () => {

  const downloadImages = (url) => {
    saveAs(
      url,
      "PlantillaMoodTracker.jpg"
    );
  };

  return (
    <>
      <div className="flex flex-col w-screen">
        <div className="p-5 text-5xl">
          <Link to="/Tools" className="text-sky-300 ">
            <BiArrowBack />
          </Link>
        </div>
        <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
          Mood Tracker
        </h3>
        <div className="w-full">
          <h3 className="text-purple-500 text-2xl text-center font-bold my-8">
            ¿Qué es la técnica del Mood Tracker?
          </h3>
          <p className="text-lg text-justify px-6">
            El Mood Tracker es un diario digital que permite llevar un registro
            de las emociones ayudando a identificar situaciones que desencadenan
            emociones negativas y así poder desarrollar un mayor
            autoconocimiento y cambiar patrones de conducta.
          </p>
          <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
            Beneficios de llevar tu propio Mood Tracker:
          </h4>
          <ol className="text-lg px-8 my-8 text-justify">
            <p>
              <em>✔️ </em>Desarrollar autoconocimiento.
            </p>
            <p>
              <em>✔️ </em>Cambiar patrones negativos de conducta.
            </p>
            <p>
              <em>✔️ </em>Aprender a identificar y gestionar emociones negativas.
            </p>
          </ol>
          <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
            Pasos a seguir:
          </h4>
          <ol className="text-lg px-8 my-8 text-justify">
            <p>
              <em>✔️ </em>Establece tus emociones básicas, nosotros te
              recomendamos: alegría, enfado, indiferencia, miedo, tristeza, y asígnale
              a cada emoción su respectivo color.
              <div className="flex flex-wrap w-full h-10v justify-center items-center lg:flex flex-row justify-center items-center">
                <BsEmojiSmile className="mx-2 lg:yellow text-yellow-300 text-3xl " />
                <BsEmojiAngry className="mx-2 lg:red text-red-500 text-3xl " />
                <BsEmojiNeutral className="mx-2 lg:green text-green-700 text-3xl " />
                <BsEmojiDizzy className="mx-2 lg:sky text-purple-500 text-3xl " />
                <BsEmojiFrown className="mx-2 lg:sky text-sky-500 text-3xl " />
              </div>
            </p>
            <p>
              <em>✔️ </em>Escoge tu plantilla favorita para cada mes.
            </p>
            <p>
              <em>✔️ </em>Registra la emoción que predominó en cada día en tu
              plantilla.
            </p>
          </ol>
        </div>
      </div>
      <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
        Plantillas
      </h4>
      <div className="flex flex-col w-full p-4 lg:flex-row mb-20">
        <div className="w-full lg:w-1/5 mx-2">
          <img
            className="w-full lg:h-50v"
            src={url1}
            alt="plantilla mood tracker"
          />
          <button
            className="w-full mb-4 mr-4 bg-purple-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
            onClick={() => downloadImages(url1)}
          >
            Descargar
          </button>
        </div>
        <div className="w-full lg:w-1/5 mx-2">
          <img
            className="w-full lg:h-50v"
            src={url2}
            alt="plantilla mood tracker"
          />
          <button
            className="w-full mb-4 mr-4 bg-purple-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
            onClick={() => downloadImages(url2)}
          >
            Descargar
          </button>
        </div>
        <div className="w-full lg:w-1/5 mx-2">
          <img
            className="w-full lg:h-50v"
            src={url3}
            alt="plantilla mood tracker"
          />
          <button
            className="w-full mb-4 mr-4 bg-purple-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
            onClick={() => downloadImages(url3)}
          >
            Descargar
          </button>
        </div>
        <div className="w-full lg:w-1/5 mx-2">
          <img
            className="w-full lg:h-50v"
            src={url4}
            alt="plantilla mood tracker"
          />
          <button
            className="w-full mb-4 mr-4 bg-purple-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
            onClick={() => downloadImages(url4)}
          >
            Descargar
          </button>
        </div>
        <div className="w-full lg:w-1/5 mx-2">
          <img
            className="w-full lg:h-50v"
            src={url5}
            alt="plantilla mood tracker"
          />
          <button
            className="w-full mb-4 mr-4 bg-purple-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        "
            onClick={() => downloadImages(url5)}
          >
            Descargar
          </button>
        </div>
      </div>
    </>
  );
};

export default MoodTracker;
