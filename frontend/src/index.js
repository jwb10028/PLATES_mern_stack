import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlatesContextProvider } from './context/PlateContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlatesContextProvider>
      <App />
    </PlatesContextProvider>
  </React.StrictMode>
);


