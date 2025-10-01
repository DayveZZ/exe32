import React from "react";
import "./App.css";
import TodoProvider from "./components/TodoProvider";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
