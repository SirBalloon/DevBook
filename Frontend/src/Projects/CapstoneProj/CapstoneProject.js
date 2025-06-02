import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/ProjectContent.css";
import "../../CSS/Body.css"
import "../../CSS/GoBackButton.css"

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
      <p>hi</p>
    </div>
  );
};

export default CapstoneProject;
