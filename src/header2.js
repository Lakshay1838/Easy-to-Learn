import React from 'react';
import './header2.css';



const Header2 = () => {
  return (
    <header className="header">
      <div className="logo">VPC</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#latest">Latest</a>
        <a href="#contact">Contact Us</a>
        <a href="#more">More</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
      </div>
    </header>
  );
};

export default Header2;
