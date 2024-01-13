// PreloadingScreen.js
import React, { useState, useEffect } from "react";
import "../CSS/Preloading.css";
import SvgButton from "../Components/CoffeeButton";

const PreloadingScreen = ({ onNextPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloaded = localStorage.getItem("hasPreloaded");
    console.log("UseEffect: hasPreloaded", preloaded);

    setLoading(preloaded === null || preloaded === "false");

    if (preloaded === "true") {
      onNextPage();
    }
  }, [onNextPage]);

  const handleButtonClick = () => {
    console.log("Button Clicked");
    setLoading(true);

    // Simulate a brief loading page
    setTimeout(() => {
      localStorage.setItem("hasPreloaded", "true");
      onNextPage();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="preloading-screen">
      {loading ? (
        <SvgButton onClick={handleButtonClick}>Start</SvgButton> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PreloadingScreen;
