import React, { useContext } from 'react';
import Home from './components/Home/Home';

import Search from './components/Search/Search';
import { dataStore } from './components/globalScopeData/GlobalData';
const App = () => {
  const {change} = useContext(dataStore);
  return (
   
    <div className="App">
      {
        change ?  <Search/> : <Home/>
      }
      
    </div >
   
   
  );
}

export default App;