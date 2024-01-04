import React from "react";
import "../CSS/Header.css";
import "../CSS/NavBar.css";

const Header = () => {
  return (
    <header>
      <div>
        <h1>@DevBook</h1>
        <p className="Creds">by KI</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
      <div className="header-line"></div>
    </header>
  );
};

export default Header;
