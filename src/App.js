import React from 'react';
import Navbar from './components/Navbar';
import ToDoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <ThemeContextProvider>
          <Navbar/>
          <ToDoList/>
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
