import React, { Fragment } from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import { CreateToDoButton } from "../CreateToDoButton/CreateToDoButton";
import { ToDoCounter } from "../ToDoCounter/ToDoCounter";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoList } from "../ToDoList/ToDoList";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoSearch } from "../ToDoSearch/ToDoSearch";
import { Modal } from "../Modal/Modal";
import './App.css'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(ToDoContext);

  return (
    <Fragment>
      <div className="container">
        <div>
          <img
            className="primaryImage"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1637295408/Mind%20Balance%20App/girl-with-objects-around-her-by-oblik-studio_xadtim.png"
            alt=""
          />
        </div>
        <div className="content">
          <ToDoCounter />
          <ToDoSearch />
          <ToDoList>
            {error && (
              <p className="descriptions">Hubo un error</p>
            )}
            {loading && <p className="descriptions">Cargando...</p>}
            {!loading && !searchedTodos.length && (
              <p className="descriptions">¡Crea tu primer tarea!</p>
            )}
            {searchedTodos.map((todo) => (
              <ToDoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </ToDoList>
          {!!openModal && (
            <Modal>
              <ToDoForm />
            </Modal>
          )}
          <CreateToDoButton setOpenModal={setOpenModal} />
        </div>
      </div>
    </Fragment>
  );
}

export { AppUI };
