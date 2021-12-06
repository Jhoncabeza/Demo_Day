import { useState } from "react";
import Boton from "../components/Means/Boton";

const BreathingExercises = () => {
    const [boton, setBoton] = useState(false)
    
    const handleRender = () => {  
        setBoton(!boton)
    }
    return(
        <div className="flex flex-col items-center justify center ">
            <button className="mt-32 w-32 bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full "onClick={handleRender}>
            {
                boton ? "Detener" : "Iniciar"
            }
            </button>
            <div className="mt-40">
            {
                boton ? <Boton/>  : ""
            }
            </div>
        </div>
    )
}

export default BreathingExercises;
