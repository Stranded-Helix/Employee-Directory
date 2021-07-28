import React, {useState, useEffect } from  "react";
import EmployeeCard from "../EmployeeCard";

export default function Container({children}) {

  const [directoryContext, setDirectoryContext] = useState(0);

    

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const newArray = [];
            data.results.forEach(x => newArray.push(x));
            console.log(`newArray ${newArray}`)
            setDirectoryContext(newArray);
        })            
    }, [])


    //TODO: finish the update Character method
    const sortByNames = async (option) => {
        //const updatedChar = await fetch(`api/user/update/${questionNumber}`)
        setDirectoryContext({});
    } 

  return (
    <div className="container">
      {directoryContext &&
      <EmployeeCard context={directoryContext}/>
      }
    </div>
  )
}