import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "../Components/Header";
import HomeContent from "../Components/HomeBody";

const HomePage = () => {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Header />
          <HomeContent />
        </div>
      </Router>
    </>
  );
};

export default HomePage;
