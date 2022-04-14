import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  deleteItem = () => {
    content;
  };
  return (
    <div>
      {content}
      <button onClick={deleteItem} className="btn btn-primary">
        Sil
      </button>
    </div>
  );
}

export default Todo;
