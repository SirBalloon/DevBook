import React from "react";
import GitHub from "../images/github-square.svg";
import "../CSS/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div>
        <div className="header-line"></div>
        <div>
          <svg
            width="238"
            height="325"
            viewBox="0 0 238 325"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={GitHub} width="238" height="325" />
          </svg>
        </div>
        <div className="hDivContainer">
          <h1>@DevBook</h1>
          <p className="Creds">by KI</p>
        </div>
        <div className="hDivContainer">
          <p>
            Welcome to my DevBook, highlighting my journey as a Software
            Developer and Creative
          </p>
        </div>
        <div className="hDivContainer">
          <p>Socials</p>
          {/* <nav>
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
      </nav> */}
        </div>
        <div className="hDivContainer">
          <button className="resumeButton">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
