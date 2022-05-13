import React from 'react';
import Admin from './Admin';
import User from './User';
import './App.css';

function App() {
  return (
    <div >
      <header >
        <button>Admin</button>
        <button>User</button>
       <h1>Scheduling App</h1>
      </header>
      <Admin/>
      <User/>
    </div>
  );
}

export default App;
