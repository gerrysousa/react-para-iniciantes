import React, { useState } from "react";
import "./taskitem.css";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, status, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setNewTitle(newTitle);
    onTaskUpdate(id, newTitle, status);
  };

  const handleSave = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={newTitle}
        onChange={handleTitleChange}
        onKeyDown={handleSave}
      />
    );
  } else {
    return (
      <div onClick={(e) => setIsEditing(true)} onKeyDown={handleSave}>
        {newTitle}
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};