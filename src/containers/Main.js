import React from "react";
import Container from "../components/Home/Container";
import LogInForm from "../components/Main/LogInForm";
import NavBarMain from "../components/Main/NavBarMain";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { SiFacebook, SiGmail } from "react-icons/si";
import { authentication } from "../firebase/firebase";

const Main = () => {
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
        <div className="h-full flex flex-col ">
            <div className="">
                <NavBarMain />
            </div>
            <div className="flex flex-col items-center justify-center
                lg:flex-row ">
                <div className="flex flex-col items-center justify-start w-screen p-2 mx-10 
                lg:w-1/2" >
                    <h1 className="text-5xl flex items center justify-start font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal 
                    lg:w-full text-6xl  ">Mind Balance</h1>
                    <p className="text-2xl flex items center justify-start text-gray-600
                    lg:w-full  mt-5  ">La mejor herramienta para liberar tu mente </p>
                    <LogInForm />
                    

                    <div className="flex flex-row justify-center w-full ">
                        <button onClick={signInWithFacebook} className="flex items-center justify-center text-center bg-transparent border border-sky-300 w-screen text-sky-300 font-bold py-2 px-4 mr-4 rounded lg:w-full" type="button">
                            <SiFacebook className="mr-2" />Facebook
                        </button>
                        
                        <button onClick={signInWithGoogle}   className="flex items-center justify-center text-center bg-transparent border border-sky-300 w-screen text-sky-300 font-bold py-2 px-4 rounded lg:w-full" type="button">
                            <SiGmail className="mr-2" />Gmail
                        </button>

                    </div>

                </div>
                <div className="w-screen 
                lg:w-1/2 ">
                    <Container />
                </div>

            </div>
        </div>
    );
};

export default Main;
