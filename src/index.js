// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"


// ReactDOM renders the App component inside the root div element in the HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);