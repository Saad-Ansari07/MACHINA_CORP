import React from 'react';
import './App.css';

// <-- IMPORTING IMAGES -->
import machine2 from './images/machine2.gif';
import machine1 from './images/machine1.gif';

// <-- IMPORTING ANIMATIONS -->
import useWebAnimations, { shakeX, fadeInLeft, fadeInRight } from "@wellyshen/use-web-animations";

function App() {
    const { ref: x } = useWebAnimations({ ...shakeX });
    const { ref: left } = useWebAnimations({ ...fadeInLeft });
    const { ref: right } = useWebAnimations({ ...fadeInRight });
  return (
    <div className="container">
      <header className="header">
      <h1 className="heading" ref={x}>MACHINA</h1>
      <button className="btn">SIGN UP</button>
        <img className="mac" src={machine2} alt={'an automachine'} ref={right}></img>
        <p className="par">Welcome to the industrial complex machina,<br></br> we will be honored to work with you.</p>
      </header>
      <div className="middle">
        <h2 className="t2" ref={x}>The future is now</h2>
        <p className="p2">Join us and realize your dream of automation in industry.</p>
        <img className="mac2" src={machine1} alt={'an automachine'} ref={left}></img>
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

