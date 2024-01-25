import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import HomeContent from "../Components/HomeBody";
// import DevBookProject from "./DevBook";
import LeetJourney from "./Leetcode";

const HomePage = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent/>} />
          {/* <Route path="/DevBook" element={<DevBookProject/>} /> */}
          <Route path="/LeetJourney" element={<LeetJourney/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
