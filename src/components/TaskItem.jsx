import React from "react";

const TaskItem = ({ title, description, isCompleted, onComplete, onEdit, onDelete }) => {
  return (
    <div className="task-item">
      {!isCompleted && (
        <input
          type="checkbox"
          onChange={onComplete}
          className="task-checkbox"
        />
      )}

      <div className="task-content">
        <h3 className="task-title">{title}</h3>
        <p className="task-description">{description}</p>
      </div>

      <div className="task-actions">
        {!isCompleted && <button onClick={onEdit} className="edit-btn">Edit</button>}
        <button onClick={onDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
