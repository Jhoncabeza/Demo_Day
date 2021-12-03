import { SiFacebook, SiGmail } from "react-icons/si";
import { authentication } from "../../firebase/firebase"
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";



const SignUpForm = () => {
    

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication,provider)
        .then((re) => {
            console.log(re)
            
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    
    const signInWithGoogle = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication,provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="md:flex md:justify-center">
                <img className="w-1/5" src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png" alt="" />
            </div>
            <form className=" justify-items-center bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 bg-white-300">

                <h1 className="text-center text-sky-300 font-extrabold mb-4">Crea tu perfil</h1>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Nombre"

                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email..."
                       
                    />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña..."
                        

                    />
                </div>
                <div className="md:flex md:justify-center mb-6">
                    <button className="bg-sky-300 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Regístrate
                    </button>
                </div>

            </form>
            <h1 className="text-center text-gray-300 font-extrabold mb-4">------------------- O -------------------</h1>

            <div className="flex flex-row justify-content-between">
                <button onClick={signInWithFacebook} className="flex items-center text-center bg-transparent border border-sky-300 w-36 text-sky-300 font-bold py-2 px-4 mr-4 rounded " type="button">
                    <SiFacebook className="mr-2" />Facebook
                </button>
                <button onClick={signInWithGoogle} className="flex items-center text-center bg-transparent border border-sky-300 w-36 text-sky-300 font-bold py-2 px-4 rounded" type="button">
                    <SiGmail className="mr-2" />Gmail
                </button>

            </div>
        </div>

    )
}

export default SignUpForm
