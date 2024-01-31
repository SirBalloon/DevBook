import React from "react";
import CoffeeCupIMG from "../images/coffee-cup.svg";
import "../CSS/CoffeeButton.css";

const SvgButton = ({ onClick }) => {
  return (
    <div className="CoffeeDiv">
      <button
        className="Coffee"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href={CoffeeCupIMG} width="80" height="80" />
        </svg>
      </button>
      <p>Click to Proceed :D</p>
    </div>
  );
};

export default SvgButton;
