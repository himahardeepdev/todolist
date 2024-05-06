// GlobalData.jsx
import React, { createContext, useState } from "react";

const dataStore = createContext();

const DataStoreProvider = ({ children }) => {
    const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("TODO")) || []);

    const [search, setSearch] = useState([]);
    const [change , setChange]  = useState(false);
   
    return (
        <dataStore.Provider value={{ tasks, setTasks, search, setSearch,change , setChange}}>
            {children}
        </dataStore.Provider>
    );
}

export { DataStoreProvider, dataStore };
