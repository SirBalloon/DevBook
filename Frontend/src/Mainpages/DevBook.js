import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Body.css";
import "../CSS/Container.css";
import "../CSS/GoBackButton.css";
import ProductDOC from "../Reusable_components/ProductDOC";

const DevBook = () => {
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
        <ProductDOC title={"DevBook"} />
      </article>
    </div>
  );
};

export default DevBook;
