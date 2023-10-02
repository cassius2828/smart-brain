import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import tachyons from 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*

Twilio # 
18332031252

cool arrow animation hover
docs-landing__card-arrow::before {
    content: "";
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-45deg) translateY(-1px);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}

docs-landing__card-arrow::after {
    content: "";
    display: inline-block;
    background-color: white;
    height: 2px;
    width: 10px;
    margin-left: 0.25em;
    animation: none 1.1s infinite;
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}
*/