import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "../CSS/AboutMe.css";

const AboutLayout = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    // Initialize on mount
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-container" ref={containerRef}>
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
              <p>Continuous updates to my portfolio, Upskilling myself in Embedded Systems and Electronics</p>
          </motion.div>
      </div>
      <div className="custom-scrollbar">
        <div className="scrollbar-track"></div>
        <div
          className="scrollbar-thumb"
          style={{ transform: `translateX(${scrollProgress}%)` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutLayout;
