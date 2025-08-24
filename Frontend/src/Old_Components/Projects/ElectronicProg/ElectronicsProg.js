import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../CSS/ProjectContent.css";
import "../../../CSS/Body.css";
import "../../../CSS/GoBackButton.css";

const ElectronicsProg = () => {
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
        <h3>Electronics Basics:</h3>
        <ul>
          <li>
             Ohm’s Law, voltage, current, resistance, power
          </li>
          <li>
            Series and parallel circuits
          </li>
          <li>
            Passive components: Resistors, capacitors, inductors
          </li>
          <li>
            Breadboard, jumper wires, batteries
          </li>
          <li>
            Basic measurement using a multimeter
          </li>
        </ul>
        <h3>Software Basics:</h3>
        <ul>
          <li>
            Simple CLI apps
          </li>
          <li>
            Logic and conditionals
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ElectronicsProg;
