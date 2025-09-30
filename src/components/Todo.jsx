import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTask([...allTask, tasks]);
    console.log(allTask);
    setTasks("");
  };

  const handleDelete = (index) => {
    setAllTask(allTask.filter((_, e) => e !== index));
  };
  return (
    <>
      <h1 className="headTitle">ToDo App Using ContextAPI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Todo"
          value={tasks}
          onChange={(e) => {
            setTasks(e.target.value);
            // console.log(tasks);
          }}
        />
        <button type="submit">ADD</button>
      </form>

      {allTask.map((task, index) => (
        <div className="todo" key={index}>
          <p>{task}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </>
  );
};

export default Todo;
