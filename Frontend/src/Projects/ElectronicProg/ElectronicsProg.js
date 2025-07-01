import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/ProjectContent.css";
import "../../CSS/Body.css";
import "../../CSS/GoBackButton.css";

const CapstoneProject = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="homeBody">
      <button className="GoBackButton" onClick={handleGoBack}>
        Go Back
      </button>
      <article className={`Projectarticle`}>
        {/* <div className="ProjectLine"></div> */}
        <h1>Project Scope</h1>
        <p>
          My Goal within this project is to teach myself both electronics and the software at a hardware level
        </p>  
        <h1>Phase 1: 23/06 - Present</h1>
        <p>
            Electronics Basics:
                Ohm’s Law, voltage, current, resistance, power
                Series and parallel circuits
                Passive components: Resistors, capacitors, inductors
                Breadboard, jumper wires, batteries
                Basic measurement using a multimeter
            Software Basics:
                Simple CLI apps
                Logic and conditionals
        </p>
      </article>
    </div>
  );
};

export default CapstoneProject;
