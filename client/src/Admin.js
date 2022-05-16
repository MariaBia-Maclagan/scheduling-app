import React, {useState} from "react";
import './App.css';


export default function Admin({addSchedule}){
   const initialInput ={
    week:"",
    day:"",
    date:"",
    employee:"",
    start:"",
    finish:"",
    hour:""
   } 
let [input, setInput] = useState(initialInput);

const handleChange = event =>{
    const value = event.target.value;
    const name = event.target.name;

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
    setInput(initialInput);

};

const postSchedule = () => {
    let copyInput = {...input}
    copyInput.hour = Number(input.hour) 
    fetch("/hours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(copyInput)

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
                name="week"  
                value={input.week} 
                placehoder="1" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Day</label><br/>
                <input onChange={handleChange} 
                value={input.day} 
                name="day"  
                placehoder="Sunday" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Date</label><br/>
                <input onChange={handleChange} 
                value={input.date}
                name="date" 
                placehoder="17-May" 
                type="text"></input>
            </div>

            <div className="col-12">
                <label>Employee</label><br/>
                <input onChange={handleChange} 
                value={input.employee}
                name="employee"  
                placehoder="Suzi" 
                type="text" ></input>
            </div>

            <div className="col-md-4">
                <label>Start</label><br/>
                <input onChange={handleChange} 
                value={input.start}
                name="start"  
                placehoder="9:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Finish</label><br/>
                <input onChange={handleChange} 
                value={input.finish}
                name="finish"  
                placehoder="17:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label>Hours</label><br/>
                <input onChange={handleChange} 
                value={input.hour}
                name="hour"  
                placehoder="8" 
                type="number"></input>
             </div>

             <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}