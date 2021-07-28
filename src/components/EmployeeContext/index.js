import React, {useContext, useEffect, useState} from 'react';

const DirectoryContext = React.createContext();



export function useDirectory() {
    return useContext(DirectoryContext);
}


export function DirectoryProvider({children}) {
    const [directoryContext, setDirectoryContext] = useState({});

    useEffect( () => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setDirectoryContext(data);
        })            
    }, [])

    //TODO: finish the update Character method
    const sortByNames = async (option) => {
        //const updatedChar = await fetch(`api/user/update/${questionNumber}`)
        setDirectoryContext({});
    } 

    return (
        <DirectoryContext.Provider value={directoryContext}>
            {children}
        </DirectoryContext.Provider>
    )
}