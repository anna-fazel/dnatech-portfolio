import "./navbar.css";
import {Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="dnatechlogo" />
            <h4>DNATECH</h4>
            </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
