import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './lista-style.css';

import editIcon from './assets/images/edit.png';
import deleteIcon from './assets/images/delete.png';
import checkedIcon from './assets/images/checked.png';
import addIcon from './assets/images/add.png';
import backgroundImage from './assets/images/background-image.png';

function App() {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState('');

  const addNewList = () => {
    if (!newListTitle) return;
    setLists([...lists, { id: lists.length, name: newListTitle }]);
    setNewListTitle('');
  };

  const deleteList = (id) => {
    setLists(lists.filter(list => list.id !== id));
  };

  const updateListName = (id, newName) => {
    setLists(
      lists.map(list =>
        list.id === id ? { ...list, name: newName } : list
      )
    );
  };

  return (
    <div 
      className="App" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        minHeight: '100vh' 
      }}
    >
      <h1 id="intro">Tem que lembrar de algo para fazer mais tarde?</h1>
      <div id="container">
        <input
          type="text"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
          placeholder="Insira um título..."
          onKeyPress={(e) => e.key === 'Enter' && addNewList()}
          className="title-input"
        />
        <button onClick={addNewList} className="button-add">
          <img src={addIcon} alt="Add" style={{ width: '20px', height: '20px' }} />
          Criar nova lista
        </button>
        {lists.map(list => (
          <ToDoList
            key={list.id}
            list={list}
            onDelete={deleteList}
            onUpdate={updateListName}
            editIcon={editIcon}
            deleteIcon={deleteIcon}
            checkedIcon={checkedIcon}
          />
        ))}
      </div>
      <footer>
        <h6>
          <a href="https://www.flaticon.com/free-icons/edit" title="edit icons" target="_blank" rel="noopener noreferrer">
            Edit icons created by Kiranshastry - Flaticon
          </a><br />
          <a href="https://www.flaticon.com/free-icons/plus" title="plus icons" target="_blank" rel="noopener noreferrer">
            Plus icons created by dmitri13 - Flaticon
          </a><br />
          <a href="https://www.flaticon.com/free-icons/delete" title="delete icons" target="_blank" rel="noopener noreferrer">
            Delete icons created by Ilham Fitrotul Hayat - Flaticon
          </a><br />
          <a href="https://www.flaticon.com/free-icons/check-mark" title="check mark icons" target="_blank" rel="noopener noreferrer">
            Check mark icons created by joalfa - Flaticon
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;