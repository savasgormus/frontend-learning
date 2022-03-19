import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Element = () => {
  return ( 
  <div> 
    <p>i am element</p>
    <p>i am element</p>
  </div>
  );
} 





ReactDOM.render(
  <React.StrictMode>
    {Element()}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
