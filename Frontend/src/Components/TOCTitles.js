import React from "react";
import "../CSS/ProjectTOC.css";
import { Link } from "react-router-dom";

const ProjectTOC = ({ Leettitle, contentlink }) => {
  return (
    <div className="TOCDiv">
      <Link to={contentlink}>
        <button className="Button">{Leettitle}</button>
      </Link>
    </div>
  );
};

export default ProjectTOC;
