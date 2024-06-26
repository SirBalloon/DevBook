import React from "react";
import logo from "../images/catlogo.svg"
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
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href={logo} width="200" height="200" />
        </svg>
      </div>
      <div className="hDivContainer">
        <h1>@DevBook</h1>
        <p>by KI</p>
      </div>
      <div className="pDivContainer">
        <p>
          Welcome to my DevBook, highlighting my journey as a Software Developer
          and Creative
        </p>
      </div>
      <section></section>
      <div className="NAVDivContainer">
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
      <div className="NAVDivContainer">
        <a href="https://docs.google.com/document/d/1MmbqvnvXztTiOwhDwiuqh_VYYUtys6fybzptbdqCB4c/edit?usp=sharing" target="Resume" rel="noopener noreferrer">
          <button className="resumeButton">Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
