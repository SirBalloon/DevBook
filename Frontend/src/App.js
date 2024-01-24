import React, { useEffect, useState } from "react";
import PreloadingScreen from "./Pages/Loading";
import HomePage from "./Pages/HomePage";

const App = () => {
  const [Preloading, setPreloading] = useState(
    localStorage.getItem("hasPreloaded") === true
  );

  useEffect(() => {
    let timeoutId;
    const handleUserActivity = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        localStorage.setItem("hasPreloaded", "false");
        setPreloading(false);
      }, 600000);
    };

    document.addEventListener("mousemove", handleUserActivity);

    timeoutId = setTimeout(() => {
      localStorage.setItem("hasPreloaded", "false");
      setPreloading(false);
    }, 600000);

    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleNextPage = () => {
    setPreloading(true); 
    localStorage.setItem("hasPreloaded", "true");
  };

  return (
    <>
      {Preloading ? (
        <HomePage/>
      ) : (
        <PreloadingScreen onNextPage={handleNextPage} />
      )}
    </>
  );
};

export default App;
