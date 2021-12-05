import { SiFacebook, SiGmail } from "react-icons/si";
import { authentication } from "../../firebase/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";


const SignUpForm = () => {

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
            .catch((err) => {
                console.log(err.message)
            })
    }

    const signInWithGoogle = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className="flex flex-col">
            <div className="p-5 text-3xl">
                <Link to="/" className="float-left"><BiArrowBack /></Link>
            </div>

            <div className=" flex flex-col items-center justify-center">

                <div className="flex justify-center ">
                    <img className="w-1/2" src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1638070162/Panda_mavnoq.png" alt="" />
                </div>
                <form className=" w-full justify-items-center bg-white shadow-xl 
                rounded px-8 pb-8 mb-4 bg-white-300
                lg:w-1/2">

                    <h1 className="text-3xl text-center 
                    text-sky-300 font-extrabold mb-8 ">Crea tu perfil</h1>
                    <div className="mb-4 w-full">
                        <input
                            className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nombre"

                        />
                    </div>
                    <div className="mb-4 w-full">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"

                        />
                    </div>
                    <div className="mb-4 w-full">
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Contraseña"


                        />
                    </div>
                    <div className="flex justify-center mb-6 w-full lg: w-1/3">
                        <button className="w-1/2 self-center bg-sky-300 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Regístrate
                        </button>
                    </div>

                </form>
                <h1 className="text-center text-gray-300 font-extrabold mb-4">------------------- O -------------------</h1>

                <div className="flex flex-row justify-content-between mb-5">
                    <button onClick={signInWithFacebook} className="flex items-center justify-center text-center bg-transparent border border-sky-300 w-36 text-sky-300 font-bold py-2 px-4 mr-4 rounded " type="button">
                        <SiFacebook className="mr-2" />Facebook
                    </button>
                    <button onClick={signInWithGoogle} className="flex items-center justify-center text-center bg-transparent border border-sky-300 w-36 text-sky-300 font-bold py-2 px-4 rounded" type="button">
                        <SiGmail className="mr-2" />Gmail
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SignUpForm
