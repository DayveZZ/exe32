import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState("");
  const [allTask, setAllTask] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTask([...allTask, tasks]);
    console.log(allTask);
    setTasks("");
  };

  const handleDelete = (index) => {
    setAllTask(allTask.filter((_, e) => e !== index));
  };

  const handleEdit = (index) => {
    // if already editing, save the update
    if (isEditing) {
      const updatedTasks = allTask.map((todo, i) =>
        i === editIndex ? tasks : todo
      );
      setAllTask(updatedTasks);
      setTasks("");
      setEditIndex(null);
      setIsEditing(false);
    } else {
      // start editing the selected todo
      setTasks(allTask[index]);
      setEditIndex(index);
      setIsEditing(true);
    }
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
          isEditing,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
