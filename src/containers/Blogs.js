import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="p-2 text-5xl text-gray-600">
        <Link to="/Home">
          <FaHome className="text-sky-300 m-4" />
        </Link>
      </div>
      <h1 className="text-center text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">
        Artículos
      </h1>
      <div className="flex flex-col items-center justify-center lg:flex-row flex-wrap justify-center ">
        <div className="max-w-sm mr-5 mx-5  rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dso8ht3px/image/upload/v1638547371/demoday/metodo_pomodoro_mjik2k.jpg"
            alt="Pomodoro clock"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              ¿Qué es el método Pomodoro y para qué sirve?
            </div>
            <p className="text-gray-700 text-base text-justify">
              Existen muchos métodos útiles para organizar el tiempo, pero el de
              Pomodoro es uno de los más sencillos de aplicar. Utilizando un
              reloj, la técnica Pomodoro consiste en dividir el tiempo dedicado
              al estudio en intervalos...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <a
              href="https://blog.educalive.com/tecnica-pomodoro/"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
            <Link
              to="/PomodoroTimer"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Ir a herramienta
            </Link>
          </div>
        </div>

        <div className="max-w-sm mr-5 mx-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dso8ht3px/image/upload/v1638547371/demoday/mood_tracker_vcisue.jpg"
            alt="Mood tracker template"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              Los beneficios de llevar tu propio <em>mood tracker</em>
            </div>
            <p className="text-gray-700 text-base text-justify">
              Al tener una información diaria sobre nuestras emociones podemos
              darnos cuenta que los domingos o los lunes son nuestros peores
              días o si nuestras altas o bajas de emociones pueden estar
              influenciadas...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <a
              href="https://astropediablog.com/mood-tracker-vida-emocional/"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
            <Link
              to="/MoodTracker"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Ir a herramienta
            </Link>
          </div>
        </div>

        <div className="max-w-sm mr-5 mx-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-3184360_mnxhjh.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              Las mejores técnicas para trabajar en equipo
            </div>
            <p className="text-gray-700 text-base text-justify">
              Una de las cosas que más nos cuesta en nuestra vida escolar,
              universitaria y laboral es el trabajo en equipo. Llevar un
              ambiente amigable con tus compañeros de trabajo puede resultar
              retador...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://www.master-malaga.com/empresas/tecnicas-trabajar-en-equipo/"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
          </div>
        </div>

        <div className="max-w-sm mr-5 mx-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271973/Mind%20Balance%20App/pexels-photo-301920_xu1lcq.jpg"
            alt="Study phrase"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              Los mejores hábitos de estudio
            </div>
            <p className="text-gray-700 text-base text-justify">
              La puesta en práctica de buenos hábitos de estudio influye
              positivamente en la consecución del éxito académico de un
              estudiante...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://www.educaweb.com/contenidos/educativos/tecnicas-estudio/mejores-habitos-estudio-asegurar-exito-academico/"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
          </div>
        </div>
        <div className="max-w-sm mr-5 mx-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271974/Mind%20Balance%20App/pexels-photo-3755761_qek2kq.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              ¿Cómo manejar el estrés y la ansiedad causados por la presión
              académica?
            </div>
            <p className="text-gray-700 text-base text-justify">
              El estrés puede ser descrito como una situación de sobrecarga o de
              presión que afecta a una persona y que depende tanto de las
              demandas de la situación...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://cinfasalud.cinfa.com/p/estres/"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
          </div>
        </div>
        <div className="max-w-sm mr-5 mx-5 rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-30v object-contain"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637271974/Mind%20Balance%20App/pexels-photo-8085935_l9lfnv.jpg"
            alt="Chica sosteniendo su cabeza estresada"
          />
          <div className="px-6 py-4 h-30v">
            <div className="font-bold text-xl mb-2 text-center">
              Reconocer, prevenir y afrontar el estrés académico
            </div>
            <p className="text-gray-700 text-base text-justify">
              El estrés es la reacción normal que podemos tener al enfrentarnos
              a las diversas exigencias acádemicas y puede disminuir nuestro rendimiento...
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-between">
            <a
              href="https://www.uchile.cl/portal/presentacion/centro-de-aprendizaje-campus-sur/114600/reconocer-prevenir-y-afrontar-el-estres-academico#:~:text=El%20estr%C3%A9s%20acad%C3%A9mico%20es%20la,conseguir%20nuestras%20metas%20y%20objetivos"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Leer Artículo
            </a>
            <a
              href="https://www.youtube.com/watch?v=vAaRM_wV5W8"
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Ver video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
