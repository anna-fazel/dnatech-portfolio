import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-col">
        
        <ul>
          <label>
            Links
          </label>
          <li> <Link to='/' >Home</Link></li>
          <li> <Link to='/about' >About</Link></li>
          <li> <Link to='/contact' >Contact</Link></li>
          <li> <Link to='/' >Privacy</Link></li>
          
        </ul>
        
        <ul>
          <label>
            Socials
          </label>
          <li> <Link to='/' >Facebook</Link></li>
          <li> <Link to='/'>Instagram</Link></li>
          <li> <Link to='/'>Twitter</Link></li>
          <li> <Link to='/' >Youtube</Link></li>
          
        </ul>
        <form className="f-form">
           <label >Newsletter</label>
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
         <button>Subscribe</button>
        </form>
        <Link className='f-logo' to="/">
          <img src={logo} alt="dnatechlogo" />
          <h4>DNATECH</h4>
        </Link>
      </div>
      <div className="f-copyright"><p>Copyright &copy; 2021 - DNATECH</p></div>
    </footer>
  );
};

export default Footer;
