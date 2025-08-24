import React from "react";
import "../CSS/ProjectContent.css";
import "../CSS/LeetContents.css";

const ProductDOC = ({ title, functionality, goals, Architecture, SourceCode }) => {
  return (
    <div className="ProjectDiv">
      <h4>{title}</h4>
      <p>{functionality}</p>
      <p>{goals}</p>
      <div>
        <p>{Architecture}</p>
        <a href={SourceCode}> {SourceCode}</a>
      </div>
    </div>
  );
};

export default ProductDOC;
