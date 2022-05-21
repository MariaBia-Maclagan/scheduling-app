import React, {useState} from "react";
import './App.css';


export default function User({schedule, setSchedule}){
    let [weekInput, setWeekInput] = useState ({week:""});

let handleUserSearch=(event)=>{
    setWeekInput(event.target.value)
};

const handleUserGet=(event) =>{
    //event.preventDefault();
    getWeekSchedule(event);
    setWeekInput("");
}
const getWeekSchedule =(week) => {
    fetch(`/hours/${week}`)
    .then(res => res.json())
    .then( response => {
        setSchedule(response);
    })
    
    .catch(e => console.log(e));
}
    
    return(
        <div >
        <hr className="form"/>
        <div className="mt-5 week">
        <div className="input-group">
       
                <div className="input-group-text">Week</div>
                <input className="form-control"
                onChange={handleUserSearch} 
                value={weekInput}
                type="number" 
                name="week" 
                placeholder="1" />
        <button className="btn btn-primary" type="submit" onClick={handleUserGet}> View Schedule </button>
        </div>
        </div>
        <div className="container rounded mt-5 ">
            <div className="row ">
           {  schedule.map(hour =>{
                    return(   
                        <div  className="col border rounded " key={hour.id}>
                            <div className="mb-2 border-bottom"><strong>{hour.day}</strong> </div>
                            <div className="mb-1">{hour.employee}<br/></div>
                            <div><strong>Start:</strong> {hour.start} <br/> <strong>Finish:</strong> {hour.finish} </div>
                            <div className="mb-3"><strong>Hrs:</strong> {hour.hour}</div>
                            </div>
                            
                    );
                })}

       

</div>
       </div>
       </div>
       
    );
}