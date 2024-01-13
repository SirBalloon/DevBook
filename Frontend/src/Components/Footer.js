import React from "react";
import GitHub from "../images/github-square.svg";
import LinkedIn from "../images/linkedin.svg";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <p>@Khalil Ibrahim</p>
      </div>
      <div className="rightFooter">
        <div>
          <button className="buttonimg" style={{ cursor: "pointer" }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image href={GitHub} width="40" height="40" />
            </svg>  
          </button>
        </div>
        <div>
          <button className="buttonimg" style={{ cursor: "pointer" }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image href={LinkedIn} width="40" height="40" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
