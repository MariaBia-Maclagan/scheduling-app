import React, {useState} from "react";

import './App.css';

export default function Adminview({schedule, setSchedule}){
let [weekInput, setWeekInput] = useState ({week:""});

    const handleSearch= (event) => {
        // console.log(schedule)
        setWeekInput(event.target.value)
        
    };
    
    const handleGet=(event) =>{
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

    const handleDelete = (id) =>{
       fetch(`/hours/${id}`, {
           method: "DELETE",
           headers:{
            "Content-Type": "application/json"
           }
       }) 
       .then(res => res.json())
       .then(response => {setSchedule(response)})

       .catch(e => console.log(e));
    }


    return(
        <div className=" mt-5">
               <div className="week">
                <div className="input-group">
                <div className="input-group-text">Week</div>
                <input className="form-control"
                onChange={handleSearch} 
                value={weekInput} 
                type="number" 
                name="week" 
                placeholder="1" />
                
                <button className="btn btn-secondary" type="submit" onClick={() => handleGet(weekInput)}> View Schedule </button>
                </div>
                
           </div>
           
     
        <div className="container mt-5 ">
            <div className="row ">
           {  schedule.map(hour =>{
                    return(   
                        <div  className="col border rounded " key={hour.id}>
                            <div className="mb-2 border-bottom"><strong>{hour.day}</strong> </div>
                            <div className="mb-1">{hour.employee}<br/></div>
                            <div><strong>Start:</strong> {hour.start} <br/> <strong>Finish:</strong> {hour.finish} </div>
                            <div className="mb-3"><strong>Hrs:</strong> {hour.hour}</div>
                            <button className="btn btn-outline-secondary btn-sm mb-2 " type="submit" onClick={()=>handleDelete(hour.id)}> delete </button>
                            </div>
                            
                    );
                })}
                {/* { schedule.filter(item => item.day ="Monday").map(hour =>{
                    return(
                        <tr key={hour.id}>
                            <th>Mon</th>
                        <td>{hour.employee} {hour.day}<br/>
                        Start: {hour.start} <br/> Finish: {hour.finish} 
                        <br/>Hours: {hour.hour}
                        <br/>
                        <button  type="submit" onClick={()=>handleDelete(hour.id)}> delete </button></td>
                        
                    </tr>
                    );
                })} */}
                
        </div>
        </div>
        </div>
        
    );
}