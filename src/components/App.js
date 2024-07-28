// src/components/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
