import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
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

  const handleEdit = (index, newText) => {
    setAllTask(allTask.map((task, i) => (i === index ? newText : task)));
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          tasks,
          setTasks,
          allTask,
          handleSubmit,
          handleDelete,
          handleEdit,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
