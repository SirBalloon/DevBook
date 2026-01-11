import { motion } from "motion/react";
import logo from "../images/floppy-disk.svg"
import GitHub from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Pinterest from "../images/pinterest.svg";
import Resume from "../images/resume.svg";
import "../CSS/Header2.css";
import "../CSS/Navbar.css";

const Header2 = () => {
  return (
    <div className="headerContainer">
      <motion.a target="Logo" rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            >        
              <img
                src={logo}
                alt="logo"
                className="Icon"
              />
            </motion.a>
      <nav>
        <ul>
          <li>
            <motion.a href="https://github.com/SirBalloon" target="GitHub" rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="buttonWrapper"
            >
              <button className="socialsButton">
                  <img
                    src={GitHub}
                    alt="Github"
                    className="Icon"
                  />
              </button>
              <span className="hoverText">To GitHub</span>
            </motion.a>
          </li>
          <li>
            <motion.a href="https://www.linkedin.com/in/khalil-ibrahim-774734260/" target="LinkedIn" rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="buttonWrapper"
            >
              <button className="socialsButton">
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="Icon"
                />
              </button>
              <span className="hoverText">To LinkedIn</span>
            </motion.a>
          </li>
          <li>
            <motion.a href="https://pin.it/2TQIhkPm8" target="Pinterest" rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="buttonWrapper"
            >
              <button className="socialsButton">
                <img
                  src={Pinterest}
                  alt="Pinterest"
                  className="Icon"
                />
              </button>
              <span className="hoverText">To Pinterest</span>
            </motion.a>
          </li>
          <li>
            <motion.a
            href={`${process.env.PUBLIC_URL}/PDFdata/Resume_Embedded_Systems.pdf`}
            rel="noopener noreferrer"
            download="Khalil_Ibrahim_Resume.pdf"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="buttonWrapper"
            >
              <button className="socialsButton">
                  <img
                    src={Resume}
                    alt="Resume"
                    className="Icon"
                  />
                </button>
                <span className="hoverText">To Resume</span>
            </motion.a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header2;


