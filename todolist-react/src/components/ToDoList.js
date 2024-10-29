import React, { useState } from 'react';

function ToDoList({ list, onDelete, onUpdate, editIcon, deleteIcon, checkedIcon }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(list.name);

  const addTask = () => {
    if (!taskInput) return;
    setTasks([...tasks, { text: taskInput, done: false }]);
    setTaskInput('');
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
  };

  const handleUpdateName = () => {
    onUpdate(list.id, editName);
    setIsEditing(false);
  };

  return (
    <div className="todo-list">
      {isEditing ? (
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && handleUpdateName()}
          onBlur={handleUpdateName}
          className="title-input"
        />
      ) : (
        <h1>
          {list.name}
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            <img src={editIcon} alt="Edit" style={{ width: '25px', height: '25px' }} />
          </button>
          <button className="delete-button" onClick={() => onDelete(list.id)}>
            <img src={deleteIcon} alt="Delete" style={{ width: '25px', height: '25px' }} />
          </button>
        </h1>
      )}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Adicionar nova tarefa..."
        onKeyUp={(e) => e.key === 'Enter' && addTask()}
        className="task-input"
      />
      <button className="button-add-task" onClick={addTask}> Add </button>
      <ul className="tasks">
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? 'done' : ''}>
            {task.text}
            <button className="done-button" onClick={() => toggleTaskDone(index)}>
              <img src={checkedIcon} alt="Checked" style={{ width: '20px', height: '20px' }} />
            </button>
            <button className="erase-button" onClick={() => deleteTask(index)}>
              <img src={deleteIcon} alt="Delete" style={{ width: '20px', height: '20px' }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;