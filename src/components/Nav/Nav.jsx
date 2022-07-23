
import "./Nav.css";
import React, { useState, useEffect } from "react";

import NavLink from './NavLink';
import { navLinks } from './navLinks';

function Navbar() {
  const [y, setY] = useState(window.scrollY);
  const [status, setStatus] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const changeStatus = () => {
    setStatus(!status)
  }

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setStatus(false)
    } else if (y < window.scrollY) {
      setStatus(true)
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y])
  return (
    <>
      <nav className={`navbar ${status ? 'navbar-open' : 'navbar-close'}`}>
        <div className="navbar-inner-container">
          <h1 className="navbar-logo">
            <a href="/">
              <img src="assests/images/logo.svg" className="company_logo" alt="Logo" />
            </a>
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>

          {navLinks.map(({ navLinkId, scrollToId }, idx) => (

            <NavLink changeStatus={changeStatus} onClick={handleClick} key={idx} navLinkId={navLinkId} scrollToId={scrollToId} className="navlink" />
          ))}

        </ul>
      </nav>
    </>
  );
}

export default Navbar;