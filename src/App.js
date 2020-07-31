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
      <img className="icon1" src={facebook}></img>
        <a href="#" className="a6"> Sign up by FB </a>
      <img className="icon2" src={home}></img>
                  <a href="#" className="a7">
                          Your account
                  </a>
      <img className="icon3" src={settings}></img>           
                  <a href="#" className="a8">
                          Account settings
                  </a>
      <img className="icon4" src={newacc}></img>         
                  <a href="#" className="a9">
                          Make account
                  </a>
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
        <a href="#" className="a1">Details</a>
        <a href="#" className="a2">Members</a>
        <a href="#" className="a3">Branches</a>
        <a href="#" className="a4">Offices</a>
        <a className="a5">&copy; 2020 Machina.com</a>
      </div>
    </div>
  );
}

export default App;

