import React from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <Navbar/>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
