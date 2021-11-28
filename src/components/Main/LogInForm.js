const LogInForm = () => {
    return (
        <div className="w-full">
            <form className="mt-6">
                <div className="flex">
                    <div className="w-48 mb-4 mr-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="email" placeholder="Email" />
                    </div>
                    
                    <div className="w-48 mb-4 mr-4">
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
                    </div>

                    <div className="w-auto">
                        <button className="w-40 bg-gradient-to-r from-purple-500 to-sky-300 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LogInForm
