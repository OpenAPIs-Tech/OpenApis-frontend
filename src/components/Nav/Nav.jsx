import logoImg from "../images/logo.jpg";
import "./Nav.css";
import React, { useState } from "react";

import NavLink from './NavLink';
import { navLinks } from './navLinks';

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
    
      <nav className="navbar">
        <h1 className="navbar-logo">
          <a href="/">
            <img src={logoImg} className="company_logo" alt="Logo" />
          </a>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				
					<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} className="navlink"/>
				))}
           
        </ul>
      </nav>
    </>
  );
}

export default Navbar;