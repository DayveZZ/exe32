import React from "react";

const Todo = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">ADD</button>
      </form>

      <div className="todo">
        <p>Hello</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </>
  );
};

export default Todo;
