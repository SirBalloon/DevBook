import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/ProjectContent.css";
import "../../CSS/Body.css";
import "../../CSS/GoBackButton.css";
import PDFViewer from "../../Reusable_components/PDFViewer";

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
      <h1>Project Scope</h1>
      <p>
        Our Client's research focuses on signal processing in the central nervous system.
        The brain collects information about the external world and builds an
        internal representation using electrochemical signals. The overarching
        goal of our client's lab is to understand the mechanisms governing neuronal
        signal transmission and integration. We focus specifically on the
        relationship between neurons and astrocytes during neurodegenerative
        diseases (ALS; Alzheimer’s disease).
      </p>
      <PDFViewer>
        
      </PDFViewer>
    </div>
  );
};

export default CapstoneProject;
