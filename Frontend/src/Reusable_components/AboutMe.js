import { motion } from "motion/react";
import "../CSS/AboutMe.css";

const AboutLayout = () => {

  return (
    <div className="about-container">
        <motion.div className="about-left-column">
            <h3>WELCOME TO MY PORTFOLIO!</h3>
            <p>This is a hub where anyone can see progress, code, hardware and documentation for all my projects. It serves to showcase my journey, open for interpretation and enjoyment! I have a background in Computer Science, whilst having taught myself other skills such as soldering, electronics, circuits, and much more.</p>
            <h4>Interests - </h4>
            <p>Embedded Systems, Web Development and software development</p>
        </motion.div>
        <motion.div className="about-right-column">
            <h4>Skills & Goals - </h4>
            <p>C, C++, Python, JavaScript(Frontend), React, TypeScript(Backend)</p>
            <h4>Current Projects - </h4>
            <p>Continous updates to my portfolio, Upskilling myself in Embedded Systems and Electronics</p>
        </motion.div>
    </div>
  );
};

export default AboutLayout;
