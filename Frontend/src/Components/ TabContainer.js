import React, { useState } from "react";
import "../CSS/Container.css";
import "../CSS/ArticleProject.css";
import "../CSS/DropdownBox.css";

const Tab = ({ title, progress, startdate }) => {
  const [dropdownVisible, setDropdownVisiblity] = useState(false);

  const handleDropdown = () => {
    setDropdownVisiblity(!dropdownVisible);
  };

  return (
    <div className="tabContainer">
      <article className={`article ${dropdownVisible ? "dropdownVisible" : ""}`}>
        <div className="articleLine"></div>
        <h4>{title}</h4>
        <button className="dropDownButton" onClick={handleDropdown}>
          {dropdownVisible ? "^" : "v"}
        </button>
      </article>
      
      {dropdownVisible && (
        <div className="dropDownContainer">
          <article className="dropDownBox, article">
            <p>LIFE IS SWEEET</p>
          </article>
        </div>
        )}
    </div>
  );
};

export default Tab;
