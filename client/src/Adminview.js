import React from "react";
import './App.css';

export default function Adminview(){
    return(
        <div>
            <form>
                <label>Week</label>
                <input type="text" name="week" value="" placehoder="1"></input>
            </form>
            <button> View Schedule </button>
        </div>
    )
}