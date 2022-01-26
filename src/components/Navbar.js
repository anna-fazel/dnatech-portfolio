import React, {useState} from "react";
import {Link } from 'react-router-dom'
import "./navbar.css";
import logo from '../img/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useSelector } from "react-redux";


const Navbar = () => {

  const name = useSelector((state) => state.user.name );

  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick =()=>setClick(!click);
  const closeMenu = () => setClick(false)

  const changeBgc =() => {
    console.log(window.scrollY)
   if (window.scrollY >= 150) {
     setNavbar(true);
   } else {
      setNavbar(false);
   }
  
  }
  window.addEventListener('scroll', changeBgc);

   

  return (
      
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="nav-logo" onClick={closeMenu}>
          <Link to="/">
            <img src={logo} alt="dnatechlogo" />
            <h5>DNATECH</h5>
            </Link>
        </div>

        <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={40} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={40} style={{ color: '#ffffff' }} />)}

        </div>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to="/" onClick={closeMenu}>Home </Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/slider" onClick={closeMenu}>Slider</Link>
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
          <Link to="/login" onClick={closeMenu}>Login</Link>
          <div ><p> {name}</p></div>
        </div>
      </nav> 
  );
};

export default Navbar;
