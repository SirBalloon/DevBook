import React from "react";
import "../../CSS/ProjectTOC.css";

const ProjectTOC = ({ Leettitle, contentlink }) => {
  const handleClick = () => {
    contentlink(Leettitle);
  };

  return (
    <div className="TOCDiv">
      <button className="Button" onClick={handleClick}>
        {Leettitle}
      </button>
    </div>
  );
};

export default ProjectTOC;
