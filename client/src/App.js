import React, {useEffect, useState} from 'react';
import Admin from './Admin';
import Adminview from './Adminview';
import User from './User';
import './App.css';

function App() {
let [schedule, setSchedule] = useState ([]);
let [isAdmin, setIsAdmin] = useState (true);

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

const handleChangeView =(isAdmin) => {
  setIsAdmin(isAdmin);
}



  return (
    <div >
      <header >
        <div className="text-end me-3 mt-3">
        
        <button onClick={() => handleChangeView(true)} className = { isAdmin ? "btn btn-danger btn-sm" : "btn btn-secondary btn-sm "} >Admin</button>
       
        <button onClick={() => handleChangeView(false)} className={ !isAdmin ? "btn btn-danger btn-sm" : "btn btn-secondary btn-sm" }>User</button>
       
        </div>
       <h1 className="text-center mt-5 mb-5">Scheduling App</h1>
      </header>
      
     {isAdmin ? <Admin addSchedule={setSchedule}/> : <User schedule={schedule}/>  } 
     {isAdmin ? <Adminview schedule={schedule} setSchedule={setSchedule} /> : ""}
     
    </div>
  );
}

export default App;
