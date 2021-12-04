const LogInForm = () => {
    return (
        <div className="w-full">
            <form className="mt-6">
                <div className="flex flex-col lg:flex-row ">
                    <div className="w-full mb-4 mr-4 lg:w-48">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="email" placeholder="Email" />
                    </div>
                    
                    <div className="w-full mb-4 mr-4 lg:w-48">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
                    </div>

                    <div>
                        <button className="w-full mb-4 mr-4 bg-sky-300 
                        hover:bg-black-700 text-white font-bold py-2 px-3
                        rounded focus:outline-none focus:shadow-outline
                        lg:w-48" type="button">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LogInForm