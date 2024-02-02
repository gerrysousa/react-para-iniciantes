import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  taskStatus,
  onTaskUpdate,
  onTaskDelete,
}) {
  const addTask = () => {
    console.log("function addTask called TaskList.js");
    onAddTask("New Task", taskStatus);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          console.log(task);
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskstatus={task.status}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Empty List</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Add Task
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
