import React, {useState} from "react";
import './App.css';

export default function Adminview({schedule, setSchedule}){
let [weekInput, setWeekInput] = useState ({week:""});


    const handleSearch= (event) => {
        console.log(schedule)
        setWeekInput(event.target.value)
        
    };
    
    const handleGet=(event) =>{
        //event.preventDefault();
        getWeekSchedule(event);
        setWeekInput("");
    }
    const getWeekSchedule =(week) => {
        //console.log(week)
        fetch(`/hours/${week}`)
        .then(res => res.json())
        .then( response => {
            setSchedule(response);
        })
        
        .catch(e => console.log(e));
    }
    

    return(
        <div>
            <form>
                <label>Week</label>
                <input onChange={handleSearch} 
                value={weekInput} 
                type="number" 
                name="week" 
                placehoder="1"></input>
            </form>

           <button type="submit" onClick={() => handleGet(weekInput)}> View Schedule </button>
   
           
            <ul>
                {schedule.map(hour =>{
                    return(
                        <li key={hour.id}>
                            {hour.week}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}