import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductDOC from "../../Reusable_components/ProductDOC";
import ProjectTOC from "./TOCTitles";
import TableContent from "./TOCcontent";
import LeetJSON from "../../JSONfiles/LeetCode.json";
import "../../CSS/LeetContents.css";
import "../../CSS/ProjectContent.css";

const LeetJourney = () => {
  const [Data, setData] = useState();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const UpdateContent = useCallback((leetTitle) => {
    const newData = LeetJSON.find((item) => item.title === leetTitle);
    console.log("New data:", newData);
    setData(newData);
  }, []);

  console.log("Data in state:", Data);

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
        <div className="ParentDiv">
          <div className="TableHeading">
            <h5 className="h5">Table of contents</h5>
            <div className="TableContents">
              <ProjectTOC
                Leettitle={"027 - Remove Elements"}
                contentlink={UpdateContent}
              />
            </div>
          </div>
          <div className="contentsOfTable">
            <h5 className="h5">Content</h5>
            <TableContent content={Data} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default LeetJourney;
