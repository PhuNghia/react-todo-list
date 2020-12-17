import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import ColorBox from './components/ColorBox/ColorBox.js';

import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const [listItem, setListItem] =  useState(
    [{id:1, title:"Go to market"},
      {id:2, title:"Buy food"} ,
      {id:3, title:"Make dinner"}]);
  function handleClick(el) {
  
    const index = listItem.findIndex(x => x.id === el.id);
    if( index <0) return;
    const newArr =[...listItem];
    newArr.splice(index,1);
    setListItem(newArr)
  }

  function handleOnSubmit(formValues) {
    console.log('...',formValues);
    const newItem = {  id: listItem.length+1, ...formValues}
   
    ;
    const newArr = [...listItem];
    newArr.push(newItem)
    setListItem(newArr)
  }
  return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ColorBox/>
        <Form onSubmit={handleOnSubmit}/>
        <List todos={listItem} onTodoClick={handleClick}/>
      
      </header>
    </div>
  );
}

export default App;
