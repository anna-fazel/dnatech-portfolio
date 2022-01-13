import React from "react";
import './header.css';
import About from './About'
import Slider from './Slider'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="homePage">
    <header className="header">
      
        <h1>DNA TECHNOLOGIES</h1>
        <h2>Presents Web Desktop Mobile Developement</h2>
        <button className="dna-button">Contact Us</button>
      
    </header>

    {/* <About />
    <Slider />
    <Contact /> */}
    </div>
  );
};

export default Home;
