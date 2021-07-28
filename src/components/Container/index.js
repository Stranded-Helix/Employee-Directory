import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";
import SearchBar from "../SearchBar";

export default function Container({ children }) {

  const [directoryContext, setDirectoryContext] = useState({
    search: "",
    results: [],
    resultsFilter: [],
    order: "ascend"
  });
  let directoryResults = {};


  useEffect(() => {
    API.search()
      .then(res => {
        setDirectoryContext({...directoryContext, results: res.data.results, resultsFilter: res.data.results })
      })
    }, [])


const handleFormSubmit = (event) => {
  event.preventDefault();
  const search = event.target.value
  console.dir(`search:`)
  console.dir(event.target)
  const resultsFilter = directoryContext.results.filter(result => {
    console.dir(`result:`)
    console.dir(result)
    return Object.values(result).contains(search.toLowerCase());

  })

  setDirectoryContext({...directoryContext, resultsFilter: resultsFilter })
};

const handleInputChange = (event) => {
  const name = event.target.name
  const value = event.target.value
  setDirectoryContext({...directoryContext,
    search: value
  });
};


const handleSort = () => {
  //flag/state/marker see if ascend/descend then switch it
  console.dir(`begin: ${directoryContext}`)
  if (directoryContext.order === 'ascend') {
    setDirectoryContext({...directoryContext, order: 'descend' })
  } else {
    setDirectoryContext({...directoryContext, order: 'ascend' })
  }

  console.log(directoryContext.order);
  // if state === descend then run sort below
  if (directoryContext.order === 'ascend') {
    const sortResults = directoryContext.results.sort((a, b) => {
      return (a.name.last < b.name.last) ? -1 : 1
    })
    setDirectoryContext({...directoryContext, resultsFilter: sortResults })
  } else {
    const sortResults = directoryContext.results.sort((a, b) => {
      return (b.name.last < a.name.last) ? -1 : 1
    })
    setDirectoryContext({...directoryContext, resultsFilter: sortResults })
  }

};

return (
  <div className="container">
    <SearchBar handleFormSubmit={handleFormSubmit} search={directoryContext.search} handleInputChange={handleInputChange}/>
    <EmployeeCard resultsFilter={directoryContext.resultsFilter} handleSort={handleSort} />
    
  </div>
)
}