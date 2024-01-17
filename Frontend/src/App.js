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
      }, 60000);
    };

    document.addEventListener("mousemove", handleUserActivity);

    timeoutId = setTimeout(() => {
      localStorage.setItem("hasPreloaded", "false");
      setPreloading(false);
    }, 60000);

    return () => {
      document.removeEventListener("mousemove", handleUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

  // Function that sets Preloaded variable -> true, to move to the next page
  const handleNextPage = () => {
    setPreloading(true); // Update the state to a boolean value
    localStorage.setItem("hasPreloaded", "true"); // Update the local storage with a string value
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
