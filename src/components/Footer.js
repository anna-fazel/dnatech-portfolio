import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import insta from "../img/insta.png";
import fb from "../img/fb.png";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import youtube from "../img/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-row">
      <div>
        <Link className="f-logo" to="/">
          <img src={logo} alt="dnatechlogo" className="footerLogo" />
          <h3>DNATECH</h3>
        </Link>
        <div className="f-socials">
         <Link to=''> <img src={fb} className="socialicon" /></Link>
         <Link to=''>  <img src={insta} className="socialicon" /></Link>
         <Link to=''> <img src={linkedin} className="socialicon" /></Link>
         <Link to=''> <img src={youtube} className="socialicon" /></Link>
         <Link to=''>  <img src={twitter} className="socialicon" /></Link>
        </div>
      </div>
      <ul className="col">
        <li className="f-label">Links</li>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Privacy</Link>
        </li>
      </ul>
      <ul className="col">
        <li className="f-label">Links</li>
        <li>
          {" "}
          <Link to="/" className="f-link">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Privacy</Link>
        </li>
      </ul>
      <form className=" f-form">
        <label className="f-label">Newsletter</label>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </form>
      </div>
      <div className="f-copyright">
        <p>Copyright &copy; 2021 - DNATECH</p>
      </div>
    </footer>
  );
};

export default Footer;
