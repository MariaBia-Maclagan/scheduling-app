import React, {useState} from 'react';
import Admin from './Admin';
import Adminview from './Adminview';
import User from './User';
import './App.css';

function App() {
let [schedule, setSchedule] = useState ([]);

const handleSchedule = (newSchedule) =>{
  setSchedule((...oldSchedule) =>[...oldSchedule, newSchedule])
};

  return (
    <div >
      <header >
        <button>Admin</button>
        <button>User</button>
       <h1>Scheduling App</h1>
      </header>
      <Admin addSchedule={(newSchedule) => handleSchedule(newSchedule)}/>
      <Adminview schedule={schedule} setSchedule={setSchedule}/> 
    </div>
  );
}

export default App;
