import React, {useEffect, useState} from 'react';
import Admin from './Admin';
import Adminview from './Adminview';
import User from './User';
import './App.css';

function App() {
let [schedule, setSchedule] = useState ([]);

useEffect(()=>{
  getSchedule();

}, []);

const getSchedule= () =>{
  fetch("/hours")
  .then(res => res.json())
  .then(fullSchedule =>{
    setSchedule(fullSchedule)
  })
  .catch(e =>{console.log(e)})
}

  return (
    <div >
      <header >
        <button>Admin</button>
        <button>User</button>
       <h1>Scheduling App</h1>
      </header>
      <Admin addSchedule={setSchedule}/>
      <Adminview schedule={schedule} setSchedule={setSchedule}/> 
    </div>
  );
}

export default App;
