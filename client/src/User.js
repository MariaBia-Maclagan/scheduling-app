import React from "react";
import './App.css';


export default function User(){
    return(
        <div className="form">
        <hr />
        <div className="mt-5">
        <form className="row row-cols-lg-auto g-3 align-items-center ">
            <div className="col-6">
            <label className="form-label">Week</label>
            <div className="input-group">

            <input className="form-control"
            
            value=""
            type="number" 
            name="week" 
            placehoder="1"></input>
            </div>
            </div>
        </form>
            <div className="col-6">
            <button className="btn btn-secondary mt-3 mb-3" type="submit" > View Schedule </button>
            </div>
       </div>
       </div>
    );
}