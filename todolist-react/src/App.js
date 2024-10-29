import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './lista-style.css';

import editIcon from './assets/images/edit.png';
import deleteIcon from './assets/images/delete.png';
import checkedIcon from './assets/images/checked.png';
import logoV360 from './assets/images/logo.png';

function App() {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState('');
  const [showInput, setShowInput] = useState(false); 

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
        backgroundColor: '#eeeeee',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        minHeight: '100vh', 
        width: '100%',
      }}
    >
      <header id="top">
        <img src={logoV360} alt="logo" style={{ height: '28px', margin: '25px 20px' }} />
        <a href="https://www.v360.io/" title="edit icons" target="_blank" rel="noopener noreferrer">
          Início
        </a>
        <a href="https://www.v360.io/blog" title="edit icons" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
        <a href="https://www.v360.io/" title="edit icons" target="_blank" rel="noopener noreferrer">
          Lista
        </a>
      </header>

      <h1 id="intro">Tem que lembrar de algo para fazer mais tarde? <span style={{ color: '#ff5c13' }}>Liste</span>.</h1>
      <div id="container">
        <div id="title-button">
          <button onClick={() => setShowInput(true)} className="button-add">
            Criar nova lista
          </button>
          {showInput && ( 
            <input
              type="text"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              placeholder="Insira um título..."
              onKeyUp={(e) => e.key === 'Enter' && addNewList()}
              className="title-input"
              style={{ marginLeft: '10px' }} 
            />
          )}
        </div>
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
            Edit icons created by Kiranshastry - Flaticon</a><br/>
          <a href="https://www.flaticon.com/free-icons/plus" title="plus icons" target="_blank" rel="noopener noreferrer">
            Plus icons created by dmitri13 - Flaticon</a><br/>
          <a href="https://www.flaticon.com/free-icons/delete" title="delete icons" target="_blank" rel="noopener noreferrer">
            Delete icons created by Ilham Fitrotul Hayat - Flaticon
          </a><br/>
          <a href="https://www.flaticon.com/free-icons/check-mark" title="check mark icons" target="_blank" rel="noopener noreferrer">
            Check mark icons created by joalfa - Flaticon
          </a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
