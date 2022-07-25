import React, { useState, useEffect, useRef } from "react";

function Todoform(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handlechange = (e) => {
    setInput(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form action="" className="todo-form" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handlechange}
        ref={inputRef}
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default Todoform;
