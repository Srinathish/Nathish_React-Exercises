import React, { useState } from 'react';

// TaskItem Component
const TaskItem = ({ task, onDelete }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '10px' 
    }}>
      <span style={{ fontSize: '18px', color: '#555' }}>{task.name}</span>
      <button 
        style={{ 
          padding: '5px 10px', 
          backgroundColor: '#f44336', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer' 
        }}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

// TaskList Component
const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2 style={{ 
        color: '#333', 
        fontSize: '24px', 
        marginBottom: '20px', 
        textAlign: 'center' 
      }}>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

// App Component
const TaskApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ]);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#f0f4ff', 
      padding: '20px', 
      borderRadius: '8px', 
      width: '200px', 
      margin: '0 auto', 
      textAlign: 'left' 
    }}>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
};

export default TaskApp;
