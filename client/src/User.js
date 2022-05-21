import React from "react";
import './App.css';


export default function User(){
    return(
        <div className="form">
        <hr />
        <div className="mt-5">
        <form className="input-group">
       
                <div className="input-group-text">Week</div>
                <input className="form-control"
                onChange=""
                value= ""
                type="number" 
                name="week" 
                placeholder="1" />
        <button className="btn btn-secondary" type="submit" > View Schedule </button>
        </form>
             
       </div>
       </div>
       
    );
}