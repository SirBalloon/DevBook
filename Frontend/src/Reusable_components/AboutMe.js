import { motion } from "motion/react";
import "../CSS/AboutMe.css";

const AboutLayout = () => {

  return (
    <div className="about-container">
        <motion.div className="about-left-column">
            <h3>Welcome to my portfolio!</h3>
            <p>It is a hub where anyone can see progress, work and documentation for all my projects. It serves to showcase my journey, open for interpretation and enjoyment! I have a background in Computer Science, whilst having taught myself other skills.</p>
            <h4>Interests - </h4>
            <p>Embedded Systems, Web Development and software development</p>
        </motion.div>
        <motion.div className="about-right-column">
            <h4>Skills & Goals - </h4>
            <p>C, C++, Python, JavaScript(Frontend), React, TypeScript(Backend)</p>
            <h4>Currnt Projects - </h4>
            <p>Continous updates to portfolio, Upskilling Myself in Embedded Systems and Electronics</p>
        </motion.div>
    </div>
  );
};

export default AboutLayout;
