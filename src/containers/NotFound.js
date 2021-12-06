import React from 'react'

const NotFound = () => {
    return (
        <div>
            <div className="h-screen bg-gradient-to-r from-purple-500 to-sky-300 flex flex-col items-center justify-center">
                <div className="w-9/12 m-auto py-2 flex items-center justify-center">
                    <div className="bg-white overflow-hidden sm:rounded-lg pb-4">
                        <div className="flex flex-col items-center justify-center pt-8">
                             <img className="w-48 object-cover center" src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638067157/Mind%20Balance%20App/PandaSad_qylfxj.png" alt=""/>
                             <h1 className="text-5xl font-bold text-purple-500">Error 404</h1>
                             <h1 className="text-3xl font-medium py-4">Vaya!</h1>
                             <p className="text-xl px-12 font-medium">No hemos podido encontrar la página que buscas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
