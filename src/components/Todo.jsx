import React from "react";

const Todo = () => {
  return (
    <>
      <form>
        <input type="text" />
        <button>ADD</button>
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
