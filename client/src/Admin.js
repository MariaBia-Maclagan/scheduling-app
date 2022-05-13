import React from "react";
import './App.css';


export default function Admin(){
    return(
        <div>
            <form>
                <label>Week</label><br/>
                <input type="text" name="week" value="" placehoder="1"></input>
                <label>Day</label><br/>
                <input type="text" name="day" value="" placehoder="Sunday"></input>
                <label>Date</label><br/>
                <input type="text" name="date" value="" placehoder="17-May"></input>
                <label>Employee</label><br/>
                <input type="text" name="employee" value="" placehoder="Suzi"></input>
                <label>Start</label><br/>
                <input type="text" name="start" value="" placehoder="9:30"></input>
                <label>Finish</label><br/>
                <input type="text" name="finish" value="" placehoder="17:30"></input>
                <label>Hours</label><br/>
                <input type="text" name="hours" value="" placehoder="8"></input>
            </form>
            <button type="submit">Submit</button>
        </div>
    );
}