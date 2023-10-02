import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Appheader from './Appheader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appheader/>
    <App />
  </React.StrictMode>
);


