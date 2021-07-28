import React, { useEffect, useState } from "react";
import "./style.css"

export default function EmployeeCard(props) {



    console.log(props);
    return (
        <div className="container center">
            <button onClick={props.handleSort} className="btn btn-sm px-0 sort-button">Last Name: A-Z</button>
            {props.resultsFilter.map(results => (
                           <div className="ecard row">
                           <div key={results.name.first} className="row">
                               <div className="col-2"><img alt="Employee Image" src={results.picture.thumbnail} /></div>
                               <div className="col-3">
                                   <div>{results.name.first} {results.name.last}</div>
                                   <div>{results.phone}</div>
                                   <div><a href={"mailto:" + results.email}>{results.email}</a></div>
                               </div>
                           </div>
                       </div>
            ))}
 
        </div>
    )
}