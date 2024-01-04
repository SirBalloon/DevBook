import React, { useState, useEffect } from "react";
import "../CSS/Preloading.css";

const PreloadingScreen = ({ onNextPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasPreloaded = localStorage.getItem("hasPreloaded");
    console.log("UseEffect: hasPreloaded", hasPreloaded);
    if (hasPreloaded) {
      setLoading(false);
    }
  }, []);

  const handleButtonClick = () => {
    console.log("Button Clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onNextPage();
      localStorage.setItem("hasPreloaded", "true");
    }, 2000);
  };

  return (
    <div className="preloading-screen">
      {loading ? (
        <button onClick={handleButtonClick}>Start</button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PreloadingScreen;
