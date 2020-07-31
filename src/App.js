import React from 'react';
import './App.css';

// <-- IMPORTING IMAGES && ICONS -->
import machine2 from './images/machine2.gif';
import machine1 from './images/machine1.gif';
import facebook from './images/facebook.ico';
import home from './images/home.ico';
import newacc from './images/newacc.ico';
import settings from './images/settings.ico';


function App() {
  return (
    <div className="container">
      <header className="header">
      <h1 className="heading">MACHINA</h1>
      <div className="menu">
      <button className="btn">SIGN UP</button>
      <div className="drop-menu">
      <img className="icon1" src={facebook} alt={'logo'}></img>
        <p  className="a6"> Sign up by FB </p>
      <img className="icon2" src={home} alt={'logo'}></img>
                  <p  className="a7">
                          Your account
                  </p>
      <img className="icon3" src={settings} alt={'logo'}></img>           
                  <p  className="a8">
                          Account settings
                  </p>
      <img className="icon4" src={newacc} alt={'logo'}></img>         
                  <p  className="a9">
                          Make account
                  </p>
       </div>
      </div>
        <img className="mac" src={machine2} alt={'an automachine'}></img>
        <p className="par">Welcome to the industrial complex machina,<br></br> we will be honored to work with you.</p>
      </header>
      <div className="middle">
        <h2 className="t2">The future is now</h2>
        <p className="p2">Join us and realize your dream of automation in industry.</p>
        <img className="mac2" src={machine1} alt={'an automachine'}></img>
      </div>
      <div className="bottom">
        <p  className="a1">Details</p>
        <p  className="a2">Members</p>
        <p  className="a3">Branches</p>
        <p  className="a4">Offices</p>
        <p  className="a5">&copy; 2020 Machina.com</p>
      </div>
    </div>
  );
}

export default App;

