import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch() {
  const { searchValue, setSearchValue} = React.useContext(ToDoContext)

  const OnSearchValueChange = (e) => {
      console.log(e.target.value)
    setSearchValue(e.target.value);
  };

  return (
      <input
        className="searchBar"
        placeholder="Busca tu tarea"
        value={searchValue}
        onChange={OnSearchValueChange}
      />
  );
}

export { ToDoSearch };
