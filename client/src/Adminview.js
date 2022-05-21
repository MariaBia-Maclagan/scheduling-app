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
        <div className="form">
            <hr />
            <div className="mt-5">
               
                <div className="input-group">
                <div className="input-group-text">Week</div>
                <input className="form-control"
                onChange={handleSearch} 
                value={weekInput} 
                type="number" 
                name="week" 
                placeholder="1"
                aria-describedby="button-addon2"
                ></input>
                
                <button id="button-addon2"className="btn btn-secondary mt-3 mb-3" type="submit" onClick={() => handleGet(weekInput)}> View Schedule </button>
                </div>
                
           </div>
           
     
        <div className="container mt-5">
            <div className="row">
           {  schedule.map(hour =>{
                    return(   
                        <div  className="col-2" key={hour.id}>
                            <div className="mb-2">{hour.day}</div>
                            <div className="mb-1">{hour.employee}<br/>
                            Start: {hour.start} <br/> Finish: {hour.finish} 
                            <br/>Hours: {hour.hour}
                            <br/>
                            <button  type="submit" onClick={()=>handleDelete(hour.id)}> delete </button>
                            </div>
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