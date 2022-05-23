import React, {useState} from "react";
import './App.css';


export default function User(){
  
    return(
        <div >
        <hr className="form"/>
        <div className="mt-5 week">
        <div className="input-group">
       
                <div className="input-group-text">Week</div>
                <input className="form-control"
                onChange=""
                value=" "
                type="number" 
                name="week" 
                placeholder="1" />
        <button className="btn btn-primary" type="submit" onClick=" "> View Schedule </button>
        </div>
        </div>
    
</div>
       
       
    );
}