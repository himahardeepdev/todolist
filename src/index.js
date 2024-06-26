import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataStoreProvider } from './components/globalScopeData/GlobalData';  



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DataStoreProvider>
     <App/>
     </DataStoreProvider>
    
  </React.StrictMode>
);
