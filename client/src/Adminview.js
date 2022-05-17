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
            <form className="row row-cols-lg-auto g-3 align-items-center ">
                <div className="col-6">
                <label className="form-label">Week</label>
                <div className="input-group">

                <input className="form-control"
                onChange={handleSearch} 
                value={weekInput} 
                type="number" 
                name="week" 
                placehoder="1"></input>
                </div>
                </div>
            </form>
                <div className="col-6">
                <button className="btn btn-secondary mt-3 mb-3" type="submit" onClick={() => handleGet(weekInput)}> View Schedule </button>
                </div>
           </div>
   
           
            <div>
                {schedule.map(hour =>{
                    return(
                        <div key={hour.id}>
                            {hour.week}
                            <button  type="submit" onClick={()=>handleDelete(hour.id)}> delete </button>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    )
}