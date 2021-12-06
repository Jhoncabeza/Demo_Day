import "./App.css";
import { AppUI } from "./AppUI";
import { ToDoProvider } from '../ToDoContext/ToDoContext'

function ToolToDoList() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default ToolToDoList;
