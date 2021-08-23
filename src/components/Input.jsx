import React from "react";

function Input() {
  return (
    <div>
      <label className="sr-only" htmlFor="add-todo">
        Add Todo
      </label>
      <input id="add-todo" type="text" />
    </div>
  );
}

export default Input;
