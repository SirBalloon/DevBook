import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkedButton from "./GoToProject";
import "../CSS/ArticleProject.css";
import "../CSS/DropdownBox.css";

const Tab = ({ title, progress, startdate, TechStack, summary, link }) => {
  const [dropdownVisible, setDropdownVisiblity] = useState(false);
  const navigate = useNavigate();

  const handleDropdown = () => {
    setDropdownVisiblity(!dropdownVisible);
  };

  const handleGoToProject = () => {
    navigate(link);
  };

  return (
    <div className="tabContainer">
      <article
        className={`article ${dropdownVisible ? "dropdownVisible" : ""}`}
      >
        <div className="articleLine"></div>
        <div className="tabDiv">
          <h4>{title}</h4>
        </div>
        <div className="MinorDeats">
          <p>Start-date: {startdate}</p>
          <p>| Progress: {progress}</p>
        </div>
        <button className="ExpandButton" onClick={handleDropdown}>
            {dropdownVisible ? "Close" : "Expand"}
          </button>
      </article>

      {dropdownVisible && (
        <div className="dropDownContainer">
          <article className="dropDownBox, article">
            <div>
              <h2 className="ProjectTitle">{title}</h2>
              <p className="ProjectSummary">Summary: {summary}</p>
              <div>
                <p className="MinorDeats">Start Date: {startdate}</p>
                <p className="MinorDeats">Current Progress: {progress}</p>
                <p className="MinorDeats">Tech Stack: {TechStack}</p>
              </div>
            </div>
            <LinkedButton link={handleGoToProject}>Go to project</LinkedButton>
          </article>
        </div>
      )}
    </div>
  );
};

export default Tab;
