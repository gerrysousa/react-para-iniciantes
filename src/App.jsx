import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, status) => {
    console.log("function addTask called App.js");
    const newTask = {
      id: generateId(),
      title,
      status,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, status) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, status };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="To Do"
          onAddTask={addTask}
          taskStatus="pending"
          tasks={tasks.filter((task) => task.status === "pending")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Doing"
          onAddTask={addTask}
          taskStatus="started"
          tasks={tasks.filter((task) => task.status === "started")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <TaskList
          title="Done"
          onAddTask={addTask}
          taskStatus="completed"
          tasks={tasks.filter((task) => task.status === "completed")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
