import React from "react";
import { useState } from "react";
// import logo from "../images/catlogo.svg"
import GitHub from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Pinterest from "../images/pinterest.svg";
import ResumeViewer from "./ResumeViewer";
import "../CSS/Header2.css";
import "../CSS/Navbar.css";

const Header2 = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
    <div className="headerContainer">
      <section className="TEMPSection"></section>
      {/* <div className="PFPimg">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href={logo} width="50" height="50" />
        </svg>
      </div> */}
      <div className="hDivContainer">
        <h1>@</h1>
        <p className="hText">DevBook</p>
        <p className="pText">by KI</p>
      </div>
      {/* <div className="NAVDivContainer"> */}
        <nav>
          <ul>
            <li>
              <a href="https://github.com/SirBalloon" target="GitHub" rel="noopener noreferrer">
                <button className="socialsButton">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={GitHub}
                      width="30"
                      height="30"
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
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={LinkedIn}
                      width="30"
                      height="30"
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
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image
                      href={Pinterest}
                      width="30"
                      height="30"
                      className="img"
                    />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      {/* </div> */}
      <div className="ResumeDivContainer">
          <button className="resumeButton" onClick={() => setShowResume(true)}>Resume</button>
      </div>
    </div>
    {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </>
  );
};

export default Header2;


