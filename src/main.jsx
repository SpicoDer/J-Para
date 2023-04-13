import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Set the height to fix the vh problem
// in mobile screens
const el = document.getElementById('root');
el.style.height = window.innerHeight + 'px';
