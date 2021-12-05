import React from 'react'

const BreathingExercises = () => {
    return (
        <div className="w-screen">
            <div className="rounded-full flex items-center justify-center text-white w-40 h-20v bg-black animate-beat1">
                Respira
                <div className="rounded-full flex items-center justify-center text-white w-40 h-20v bg-white animate-beat2">
                    Sostener
                </div>
            </div>

            <div className="rounded-full flex items-center justify-center text-white w-40 h-20v bg-black animate-beat3">
                Exhale
            </div>
        </div>
    )
}

export default BreathingExercises;
