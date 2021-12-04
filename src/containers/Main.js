import React from "react";
import Container from "../components/Home/Container";
import LogInForm from "../components/Main/LogInForm";
import NavBarMain from "../components/Main/NavBarMain";


const Main = () => {
    return (
        <div className="h-100v">
            <NavBarMain className="h-10v"/>
            <div className="flex flex-col items-center justify-center lg:flex-row h-90v ">
                <div className="w-screen p-2 mx-10 lg:w-1/2 text-left " >
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal 
                    lg:text-6xl text-left ">Mind Balance</h1>
                    <p className="text-2xl  text-gray-600
                    lg:mt-5 ">La mejor herramienta para liberar tu mente </p>
                    <LogInForm />
                </div>
                <div className="w-screen lg:w-1/2"> 
                    <Container />
                </div>
            </div>
        </div>
    );
};

export default Main;
