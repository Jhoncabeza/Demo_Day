import React from "react";
import "./ToDoItem.css";
import { BsFillTrashFill } from'react-icons/bs';
import { AiFillCheckCircle } from'react-icons/ai'

function ToDoItem(props) {
  return (
    <li>
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}><AiFillCheckCircle/></span>
      <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>{props.text}</p>
      <span className="Icon Icon-delete" onClick={props.onDelete}><BsFillTrashFill/></span>
    </li>
  );
}

export { ToDoItem };
