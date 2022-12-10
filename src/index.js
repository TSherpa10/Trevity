import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Components/Landing';
import NavBar from './Components/Navbar';
import reportWebVitals from './reportWebVitals';

const navbarLinks = [
  {url: "#", title:"Home"},
  {url: "#", title:"Music"},
  {url: "#", title:"Timer"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar navbarLinks={navbarLinks}></NavBar>
    <Landing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
