import React from "react";
import Container from "../components/Home/Container";
import LogInForm from "../components/Main/LogInForm";
import NavBarMain from "../components/Main/NavBarMain";


const Main = () => {
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
