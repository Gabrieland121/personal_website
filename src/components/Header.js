import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="header">
      <div className="header-top">
        <div className="logo">
          <a href="#home">Gabriel Amezquita Medina</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;