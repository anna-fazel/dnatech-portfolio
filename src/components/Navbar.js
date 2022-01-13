import React, {useState, useEffect} from "react";
import {Link } from 'react-router-dom'
import "./navbar.css";
import logo from '../img/logo.png'
import { IconContext } from "react-icons";
import { MdOutlineMenu, MdClose  } from "react-icons/md";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick =()=>setClick(!click);
  const closeMobileMenu = ()=>setClick(false);

  const changeBgc =() => {
    console.log(window.scrollY)
   if (window.scrollY >= 90) {
     setNavbar(true);
   } else {
      setNavbar(false);
   }
  
  }
  window.addEventListener('scroll', changeBgc);

  return (
      
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav-logo" onClick={closeMobileMenu}>
          <Link to="/">
            <img src={logo} alt="dnatechlogo" />
            <h5>DNATECH</h5>
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? <MdClose /> : <MdOutlineMenu  />} />
            </div>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to="/" onClick={closeMobileMenu}>Home </Link>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          <Link to="/slider" onClick={closeMobileMenu}>Slider</Link>
        </div>
      </nav>
      
      
  );
};

export default Navbar;
