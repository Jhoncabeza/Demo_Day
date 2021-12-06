import React, { Fragment } from 'react'
import { ToDoContext } from '../ToDoContext/ToDoContext';
import "./ToDoCounter.css"
function ToDoCounter() {
    const { totalTodos, completedTodos } = React.useContext(ToDoContext);

    return(
        <Fragment>
        <h2 className="ToDoCounter">Has completado {completedTodos} de {totalTodos} tareas pendientes</h2>
        </Fragment>
    )
}

export { ToDoCounter };