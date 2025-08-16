import React from "react";
// import logo from "../images/catlogo.svg"
import GitHub from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Pinterest from "../images/pinterest.svg";
import Resume from "../images/resume.svg";
import "../CSS/Header2.css";
import "../CSS/Navbar.css";

const Header2 = () => {
  return (
    <div className="headerContainer">
      <div
      style={{
        width: "100%",
        height: "6%",
        backgroundColor: "#ccc",
      }}
      ></div>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/SirBalloon" target="GitHub" rel="noopener noreferrer">
              <button className="socialsButton">
                  <img
                    src={GitHub}
                    alt="Github"
                    className="Icon"
                  />
              </button>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/khalil-ibrahim-774734260/" target="LinkedIn" rel="noopener noreferrer" >
              <button className="socialsButton">
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="Icon"
                />
              </button>
            </a>
          </li>
          <li>
            <a href="https://pin.it/2TQIhkPm8" target="Pinterest" rel="noopener noreferrer">
              <button className="socialsButton">
                <img
                  src={Pinterest}
                  alt="Pinterest"
                  className="Icon"
                />
              </button>
            </a>
          </li>
          <li>
            <a href="https://github.com/SirBalloon" target="GitHub" rel="noopener noreferrer">
              <button className="socialsButton">
                  <img
                    src={Resume}
                    alt="Resume"
                    className="Icon"
                  />
                </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header2;


