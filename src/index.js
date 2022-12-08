import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class='total-container'>
  <div class='menu-container'>
  
      <div class='menu'>
        <div class='date'>Welcome to Our Wedding RSVP</div>
        <div class='links'>
        <div class='signup'><a href="https://amazon.com">Please Feel Free to Buy Something From Our Registry</a></div>
        </div>
      </div>
    </div>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <div class = 'tryingSomething'>
    <img src="/pics/wedding.jpeg" class="weddingImage"/>
  </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
