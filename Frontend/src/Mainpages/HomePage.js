import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Reusable_components/Header";
import HomeContent from "../Reusable_components/HomeBody";
// import DevBookProject from "./DevBook";
import LeetJourney from "../Projects/Leetcode/Leetcode";
import RoboAssignment from "../Projects/Robotics/RoboticsAssignment";

const HomePage = () => {
  return (
    <Router>
      <div className="BodyDiv">
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent/>} />
          {/* <Route path="/DevBook" element={<DevBookProject/>} /> */}
          <Route path="/LeetJourney" element={<LeetJourney/>}/>
          <Route path="/RoboAssignment" element={<RoboAssignment/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
