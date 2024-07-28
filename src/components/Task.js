// src/components/Task.js
import React, { useState } from 'react';

const Task = ({ task, index, saveTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleSave = () => {
    saveTask(index, { text: editTask, completed: isCompleted });
    setIsEditing(false);
  };

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
    saveTask(index, { text: task.text, completed: !isCompleted });
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={toggleComplete}>
            {isCompleted ? 'Undo' : 'Complete'}
          </button>
        </>
      )}
    </li>
  );
};

export default Task;
