import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  taskStatus,
  onTaskUpdate,
}) {
  const addTask = () => {
    console.log("function addTask called TaskList.js");
    onAddTask("New Task", taskStatus);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            onTaskUpdate={onTaskUpdate}
          />
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
