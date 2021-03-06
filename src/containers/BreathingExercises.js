import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Boton from "../components/Tools/Boton";

const BreathingExercises = () => {
  const [boton, setBoton] = useState(false);

  const handleRender = () => {
    setBoton(!boton);
  };
  return (
    <div className="flex flex-col justify center">
      <div className="p-5 text-5xl">
        <Link to="/Tools" className="text-sky-300">
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal mb-8">
        Técnica 4-7-8
      </h3>
      <div className="flex flex-col  items-center">

        <div className="flex flex-col h-70v lg:h-60v">
          <div className="mt-40">{boton ? <Boton /> : ""}</div>
        </div>
        <button
          className="self-center w-32 bg-sky-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full "
          onClick={handleRender}
        >
          {boton ? "Detener" : "Iniciar"}
        </button>
        <div className="">
          <h3 className="text-purple-500 text-2xl text-center font-bold my-8">
            ¿Qué es la técnica de respiración 4-7-8?
          </h3>
          <p className="text-lg text-justify px-6">
            La técnica del 4-7-8 es un ejercicio de relajación desarrollado por
            el doctor Andrew Weil que resulta efectivo para dormir, relajarnos o
            aliviar los nervios producidos en cualquier situación.
          </p>
          <h4 className="text-purple-500 text-2xl text-center font-bold my-8">
            Pasos a seguir:
          </h4>
          <ol className="text-lg px-8 my-8 text-justify">
            <p>
              <em>✔️ Paso 1: </em>Toma aire durante 4 segundos.
            </p>
            <p>
              <em>✔️ Paso 2: </em>Aguanta la respiración durante 7 segundos.
            </p>
            <p>
              <em>✔️ Paso 3: </em>Exhala durante 8 segundos.
            </p>
            <p>
              <em>✔️ Paso 4: </em>Repite el ciclo 4 veces.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BreathingExercises;
