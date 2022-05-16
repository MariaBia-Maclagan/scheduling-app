import React, {useState} from "react";
import './App.css';


export default function Admin({addSchedule}){
let [input, setInput] = useState({
    week:"",
    day:"",
    date:"",
    employee:"",
    start:"",
    finish:"",
    hours:""
});

const handleChange = event =>{
    const value = event.target.value;
    const name = event.target.value;

    setInput(oldSchedule =>{
        return{
            ...oldSchedule,
            [name]: value
        };
    });
}

const handleSubmit = event =>{
    event.preventDefault();
    postSchedule();
    setInput({
        week:"",
        day:"",
        date:"",
        employee:"",
        start:"",
        finish:"",
        hours:""
    })

};

const postSchedule = () => {
    fetch("/hours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      })
      .then(response => response.json())
      .then(updatedSchedule => {
        addSchedule(updatedSchedule); // updating the state variable
        setInput({});
      })
      .catch(err => console.error(err));
}

    return(
        <div className="row g-3">
            <div className="col-md-4">
                <label>Week</label><br/>
                <input onChange={handleChange}
                value={input.week} 
                name="week"  
                placehoder="1" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Day</label><br/>
                <input onChange={handleChange} 

                name="day"  
                placehoder="Sunday" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Date</label><br/>
                <input onChange={handleChange} 

                name="date" 
                placehoder="17-May" 
                type="text"></input>
            </div>

            <div className="col-12">
                <label>Employee</label><br/>
                <input onChange={handleChange} 

                name="employee"  
                placehoder="Suzi" 
                type="text" ></input>
            </div>

            <div className="col-md-4">
                <label>Start</label><br/>
                <input onChange={handleChange} 

                name="start"  
                placehoder="9:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Finish</label><br/>
                <input onChange={handleChange} 

                name="finish"  
                placehoder="17:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Hours</label><br/>
                <input onChange={handleChange} 

                name="hours"  
                placehoder="8" 
                type="text"></input>
             </div>

             <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}