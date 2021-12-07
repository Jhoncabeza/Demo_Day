import React, { useEffect, useState } from 'react'

const Boton = () => {
    const [segundos, setSegundos] = useState(1);
    const [respirar, setRespirar] = useState(1);
    const [retener, setRetener]   = useState(1);
    const [exhalar, setExhalar]   = useState(1);
    const [conteo, setConteo]     = useState(0);
    const [nombre, setNombre]     = useState("");
    
    useEffect(() => {
        let timer = setTimeout(() => { setSegundos(segundos + 1); }, 1000);

        if (segundos >= 1 && segundos <= 4) {
            setRespirar(respirar + 1);
            setConteo(respirar);
            setNombre("RESPIRAR");
        } else if (segundos >= 5 && segundos <= 11) {
            setRetener(retener + 1);
            setConteo(retener);
            setNombre("RETENER");
        } else if (segundos >= 12 && segundos <= 19) {
            setExhalar(exhalar + 1);
            setConteo(exhalar);
            setNombre("EXHALAR");
        } else {
            clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [segundos]
    );

    return <div className="w-screen flex items-center justify-center">
        <div className="rounded-full flex items-center justify-center text-white h-xl w-24 bg-sky-300 animate-beat1">{nombre} {conteo} </div></div>

}

export default Boton
