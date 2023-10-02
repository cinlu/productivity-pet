import './App.css';
import React from 'react';
import Todolist from './Todolist';
import Productivepet from './Productivepet';

function App() {
  return (
    <div className="container">
      <Productivepet/>
      <Todolist/>
    </div>
  );
}

export default App;
