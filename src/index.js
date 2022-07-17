import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import NavProvider from './context/NavContext';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavProvider>
			
        <App />
      
			</NavProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);
