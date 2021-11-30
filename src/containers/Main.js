import React from "react";
import LogInForm from "../components/Main/LogInForm";
import NavBarMain from "../components/Main/NavBarMain";
import Container from "../components/Home/Container";

const Main = () => {
    return (
        <div className="h-100v">
            <NavBarMain className="h-10v"/>
            <div className="flex flex-row h-90v my-auto items-center m-40">
                <div className="w-2/4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal">Mind Balance</h1>
                    <p className="text-2xl text-gray-600">La mejor herramienta para liberar tu mente </p>
                    <LogInForm className="mt-6" />
                </div>
                <div className="w-auto"> 
                    <Container />
                </div>
            </div>
        </div>
    );
};

export default Main;
