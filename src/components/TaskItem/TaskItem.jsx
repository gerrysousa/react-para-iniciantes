import React, { useState } from "react";
import "./taskitem.css";
import PropTypes from "prop-types";

export default function TaskItem({
  id,
  title,
  taskstatus,
  onTaskUpdate,
  onTaskDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    const newTitle = event.target.value;
    setNewTitle(newTitle);
    onTaskUpdate(id, newTitle, taskstatus);
  };

  const handleSave = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (newTitle.trim().length === 0) {
        onTaskDelete(id);
      }
    }
  };

  const onTaskStatusChange = (event) => {
    console.log(event.target.value);
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="taskitem">
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onKeyDown={handleSave}
        />
      </div>
    );
  } else {
    return (
      <div className="taskitem">
        <div onClick={(e) => setIsEditing(true)}>{newTitle}</div>
        <select onChange={onTaskStatusChange} value={taskstatus}>
          <option value="pending">Pending</option>
          <option value="started">Started</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskstatus: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
