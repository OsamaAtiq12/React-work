import React, { useState } from "react";
import Todo from "./Todo";
import Todoform from "./Todoform";

function Todolist() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "hi",
    },
    {
      id: Math.random(),
      text: "hi",
    },
  ]);

  const addtodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newtodos = [todo, ...todos];
    setTodos(newtodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <Todoform onSubmit={addtodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Todolist;
