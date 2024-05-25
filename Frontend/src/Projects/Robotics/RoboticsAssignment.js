import React from "react";
import { useNavigate } from "react-router-dom";
import ProductDOC from "../../Reusable_components/ProductDOC";
import "../CSS/LeetContents.css";
import "../CSS/ProjectContent.css";

const RoboAssignment = () => {
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
        <div className="ProjectLine"></div>
        <ProductDOC
          title={"LeetCode"}
          functionality={
            "Starting 2024, I have made it my mission to become the best programmer I can be. One of my approaches to achieving this is to do atleast 2 leetcode problems a day. This project started on the 8th of January and will start being documented from the 20th of January. "
          }
          goals={
            "My goal is to solve and break down the logic used behind the solution"
          }
        />
        </article>
    </div>
  );
};

export default RoboAssignment;
