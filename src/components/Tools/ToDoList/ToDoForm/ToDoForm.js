import React, { useState } from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = React.useContext(ToDoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa tu tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Reunión a las 3:00 p.m"
      />
      <div className="formButtons">
        <button className="formButton" type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button className="formButton" type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { ToDoForm };
