import React from "react";
import ToolToDoList from "../components/Tools/ToDoList/App/ToolToDoList";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";


const ToDoList = () => {
  return (
    <div className="lg:h-200v">
      <div className="p-5 text-5xl">
        <Link to="/Tools" className="text-sky-300" >
          <BiArrowBack />
        </Link>
      </div>
      <h3 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-300 text-transparent bg-clip-text leading-normal ">
        To Do List
      </h3>
      <ToolToDoList />
    </div>
  );
};

export default ToDoList;
