import React, { useContext } from "react";
import { TodoContext } from "./TodoProvider";

const TodoList = () => {
  const { tasks, setTasks, allTask, handleSubmit, handleDelete, handleEdit } =
    useContext(TodoContext);

  return (
    <div>
      <h1 className="headTitle">ToDo App Using ContextAPI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Todo"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>

      {allTask.map((task, index) => (
        <div className="todo" key={index}>
          <p>{task}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
