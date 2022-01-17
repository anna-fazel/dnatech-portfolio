import React from "react";
import './header.css';
import Animate from './Animate'
import Slider from './Slider'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="homePage">
    <header className="header">
      
        <h1>DNA TECHNOLOGIES</h1>
        <h2>Presenting Web Desktop Mobile Developement</h2>
        <button className="dna-button">Contact Us</button>
      
    </header>

    <Animate />
    {/* <Slider />
    <Contact /> */}
    </div>
  );
};

export default Home;
