import React from "react";
import GitHub from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Pinterest from "../images/pinterest.svg";
import "../CSS/Header.css";
import "../CSS/Navbar.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header-line"></div>
      <div className="PFPimg">
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
          Welcome to my DevBook, highlighting my journey as a Software Developer
          and Creative
        </p>
      </div>
      <div className="hDivContainer">
        <nav>
          <ul>
            <li>
              <a href="https://github.com/SirBalloon" target="GitHub" rel="noopener noreferrer">
                <button className="socialsButton">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={GitHub}
                      width="40"
                      height="40"
                      className="img"
                    />
                  </svg>
                </button>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/khalil-ibrahim-774734260/" target="LinkedIn" rel="noopener noreferrer" >
                <button className="socialsButton">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={LinkedIn}
                      width="40"
                      height="40"
                      className="img"
                    />
                  </svg>
                </button>
              </a>
            </li>
            <li>
              <a href="https://pin.it/2TQIhkPm8" target="Pinterest" rel="noopener noreferrer">
                <button className="socialsButton">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={Pinterest}
                      width="40"
                      height="40"
                      className="img"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hDivContainer">
        <a href="https://docs.google.com/document/d/1WzKW5meZbv5B5G1mznx_RT4P4tbw_SkAPb5XLv0uOr0/edit?usp=sharing" target="Resume" rel="noopener noreferrer">
          <button className="resumeButton">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
