import React from "react";
import './App.css';


export default function User(){
    return(
        <div>
            <form>
                <label>Date</label>
                <input type="text" name="week" value="" placehoder="1"></input>
                <label>Employee</label>
            </form>
            <button>View Schedule</button>
        </div>
    );
}