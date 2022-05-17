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
        <div className="row g-3 form">
            <div className="col-md-4">
                <label className="form-label">Week</label><br/>
                <input className="form-control"
                onChange={handleChange}
                name="week"  
                value={input.week} 
                placeholder="1" 
                type="number"></input>
            </div>

            <div className="col-md-4">
                <label className="form-label">Day</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.day} 
                name="day"  
                placeholder="Sunday" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label className="form-label">Date</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.date}
                name="date" 
                placeholder="17-May" 
                type="text"></input>
            </div>

            <div className="col-12">
                <label className="form-label">Employee</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.employee}
                name="employee"  
                placeholder="Maria" 
                type="text" ></input>
            </div>

            <div className="col-md-4">
                <label className="form-label">Start</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.start}
                name="start"  
                placeholder="9:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label className="form-label">Finish</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.finish}
                name="finish"  
                placeholder="17:30" 
                type="text"></input>
            </div>

            <div className="col-md-4">
                <label className="form-label">Hours</label><br/>
                <input className="form-control"
                onChange={handleChange} 
                value={input.hour}
                name="hour"  
                placeholder="8"
                type="number"></input>
             </div>

             <div>
            <button className="btn btn-secondary"type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}