// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks }) => {
  const saveTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          saveTask={saveTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
