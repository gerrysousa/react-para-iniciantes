import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    console.log("function addTask called TaskList.js");
    onAddTask("New Task", "pending");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            {task.title}
          </div>
        ))}
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
