import React from "react";
import LogInForm from "../../components/Main/LogInForm";
import NavBarMain from "../../components/Main/NavBarMain";
import Container from "../../components/Home/Container";

const Main = () => {
    return (
        <div className="h-100v">
            <NavBarMain className="h-10v"/>
            <div className="flex flex-col items-center justify-center md:flex-row">
                <div className="w-screen p-2 mx-10 md:w-1/2" >
                    <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal 
                    md:text-6xl ">Mind Balance</h1>
                    <p className="text-2xl text-center text-gray-600
                    md:mt-5">La mejor herramienta para liberar tu mente </p>
                    <LogInForm />
                </div>
                <div className="w-screen md:w-1/2"> 
                    <Container />
                </div>
            </div>
        </div>
    );
};

export default Main;
