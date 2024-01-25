import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "Frontend/src/Components/Header.js";
import HomeContent from "Frontend/src/Components/HomeBody.js";
// import DevBookProject from "./DevBook";
import LeetJourney from "./Leetcode";

const HomePage = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Header />
        <Routes>
          <Route path="/Home" element={<HomeContent/>} />
          {/* <Route path="/DevBook" element={<DevBookProject/>} /> */}
          <Route path="/LeetJourney" element={<LeetJourney/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
