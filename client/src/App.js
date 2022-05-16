import React, {useState} from 'react';
import Admin from './Admin';
import Adminview from './Adminview';
import User from './User';
import './App.css';

function App() {
let [schedule, setSchedule] = useState ([]);

  return (
    <div >
      <header >
        <button>Admin</button>
        <button>User</button>
       <h1>Scheduling App</h1>
      </header>
      <Admin addSchedule={setSchedule}/>
      {/* <Adminview/>
      <User/> */}
    </div>
  );
}

export default App;
