import React from "react";
import Todoform from "./Components/Todoform";
import Todolist from "./Components/Todolist";
import "./App.css"; //
function App() {
  return (
    <div className="todo-app">
      <Todolist />
    </div>
  );
}

export default App;
