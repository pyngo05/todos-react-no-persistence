import React from "react";
import "./App.css";
import Input from "./components/Input";

// TODO: Use `useReducer` to manage complex state - CRUD

function App() {
  const [todos, setTodos] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newTodo = form.elements[0].value.trim();
    if (newTodo) {
      setTodos((prevTodos) =>
        prevTodos.concat({
          id: prevTodos.length + 1,
          text: newTodo,
        })
      );
    }

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input />
        <button
          type="submit"
          className="bg-green-500 ml-1 p-4 rounded-sm text-white"
        >
          Add Todo
        </button>
      </form>

      <ol>
        {todos.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
