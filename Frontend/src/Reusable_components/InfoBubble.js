import "../CSS/InfoBubble.css";
import { AnimatePresence, motion} from "motion/react";
import GitHub from "../images/github.svg";
import { useEffect, useRef } from "react";

const StaticNoise = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const drawNoise = () => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // Red
        data[i + 1] = value; // Green
        data[i + 2] = value; // Blue
        data[i + 3] = 255;   // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const interval = setInterval(drawNoise, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ width: '100%', height: '100%', borderRadius: '8px' }}
    />
  );
};

const InfoBubble = ({ InfoData, Layout, onReset }) => {
  return (
    <div className="PC_container">
      {!Layout ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: '100%', height: '100%' }}
        >
          <StaticNoise />
        </motion.div>
      ) : Layout === "AboutMe" ? (
        <AnimatePresence>
          <motion.div
            className="InfoGrid"
            // initial={{ scaleY: 1, opacity: 1 }}
            // animate={{ scaleY: 1, opacity: 1 }}
            // exit={{ scaleY: 0, opacity: 0 }}
            // transition={{ duration: 0.4, ease: "easeInOut" }}
            // style={{ originY: 0.5 }}
          >
            <motion.div
              className="InfoHeader"
              key={`${InfoData.title}-${Layout}-header`}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="ProjName">{InfoData.title}</h1>
            </motion.div>
            <motion.div
              className="DescriptInfo"
              key={`${InfoData.title}-${Layout}-descript`}
              initial={{ x: -800, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <h3 className="InfoHeadings">Summary</h3>
              <p className="InfoText">{InfoData.Summary}</p>
            </motion.div>
            <motion.div
              className="ComfyTechStack"
              key={`${InfoData.title}-${Layout}-comfy`}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <h3 className="InfoHeadings">Comfy TechStack</h3>
              <p className="InfoText">{InfoData.TechStack}</p>
            </motion.div>
            <motion.div
              className="ContactDeats"
              key={`${InfoData.title}-${Layout}-contact`}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <h3 className="InfoHeadings">Contact Details</h3>
              <p className="InfoText">{InfoData.ContactDeats}</p>
            </motion.div>
            <motion.div
              className="TechStackInfo"
              key={`${InfoData.title}-${Layout}-techstack`}
              initial={{ x: -800, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <h3 className="InfoHeadings">Current Projects</h3>
              <p className="InfoText">{InfoData.CurrentProject}</p>
            </motion.div>
            <motion.div
              className="Interests"
              key={`${InfoData.title}-${Layout}-interests`}
              initial={{ y: 800, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <h3 className="InfoHeadings">Current Interests</h3>
              <p className="InfoText">{InfoData.Interests}</p>
            </motion.div>
            <motion.div className="InfoFooter">
              <motion.button className="InfoButton" onClick={onReset}>
                Reset
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
          <motion.div className="InfoGrid">
            <AnimatePresence>
              <motion.div
                className="InfoHeader"
                key={`${InfoData.title}-${Layout}-header`}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="ProjName">{InfoData.title}</h1>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="DescriptInfo"
                key={`${InfoData.title}-${Layout}-descript`}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <h3 className="InfoHeadings">Summary</h3>
                <p className="InfoText">{InfoData.Summary}</p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="ReleaseInfo"
                key={`${InfoData.title}-${Layout}-release`}
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <h3 className="InfoHeadings">Releases</h3>
                <p className="InfoText">{InfoData.ReleaseInfo}</p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="TechStackInfo"
                key={`${InfoData.title}-${Layout}-techstack`}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <h3 className="InfoHeadings">TechStack</h3>
                <p className="InfoText">{InfoData.TechStack}</p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="ExtraInfo"
                key={`${InfoData.title}-${Layout}-extra`}
                initial={{ y: 800, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              >
                <motion.div className="InfoBubble">
                  <h4 className="InfoHeadings">Progress</h4>
                  <p className="InfoMiniText">{InfoData.Progress}</p>
                </motion.div>
                <motion.div className="InfoBubble">
                  <h5 className="InfoHeadings">Dates</h5>
                  <p className="InfoMiniText">{InfoData.Dates}</p>
                </motion.div>
                <motion.div className="InfoBubble">
                  <h5 className="InfoHeadings">Extra Info</h5>
                  <p className="InfoMiniText">{InfoData.OtherInfo}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div className="InfoFooter">
                <motion.button 
                  className="InfoButton" 
                  onClick={onReset}
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Reset
                </motion.button>
                <motion.button 
                  className="InfoButton" 
                  onClick={() => window.open(InfoData.GithubLink, "_blank", "noopener", "noreferrer")}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px'}}
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <img
                    src={GitHub}
                    alt="Github"
                    className="Icon"
                    style={{ height: '20px', width: '20px' }}
                  />
                  To Github
                </motion.button>
                <motion.button 
                  className="InfoButton"
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
      )}
    </div>
  );
};

export default InfoBubble;
