import React, { useState } from 'react'

const BreathingExercises = () => {

    const [state, setState] = useState(0)

    // const activar = ()=>{
    //     setState()
    // }
    // setTimeout(() => {
    //     setState(
    //       state + 1
    //     )
    // }, 1000);
    // console.log(state)
    
    return (
        <div className="w-screen h-100v flex flex-col items-center justify-center">
           
             
            <div className="rounded-full flex items-center justify-center text-white w-40 h-20v bg-blue-600 animate-beat1">
                Respira {state}
            </div>
            <div className="rounded-full flex items-center justify-center text-white w-40 h-20v bg-blue-600 animate-beat1">
                Retener {state}
            </div>
            <div className="rounded-full flex items-center justify-center text-white w-40 h-20v  bg-blue-600 animate-beat1">
                Exhala {state}
            </div>
                  
            
        </div>
    )
}

export default BreathingExercises;
