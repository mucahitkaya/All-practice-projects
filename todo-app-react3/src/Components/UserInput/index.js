import React, { useState } from "react";

function UserInput() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [{ text: input, id: id }, ...todos]);
    setInput("");
    setId(id + 1);
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          class="new-todo"
          placeholder="Add a new To-do"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="todo"
        ></input>
      </form>
      <ul class="todo-list">
        {todos.map(({ text, id }) => (
          <li class="view" key={id}>
            <span>{text}</span>
            <button class="destroy " onClick={() => removeTodo(id)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserInput;
