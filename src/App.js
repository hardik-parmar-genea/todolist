import React from 'react';
import ReactDom from 'react-dom';
import Todolist from "./components/Todolist";
import './components/style.css'



function App() {
  return (
    <div className='todo-list'>
      <Todolist />
      <Todolist />
      <Todolist />
      <Todolist />


    </div>
  );
}

export default App;
