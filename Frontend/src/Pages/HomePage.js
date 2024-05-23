import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import HomeContent from "../Components/HomeBody";
// import DevBookProject from "./DevBook";
import LeetJourney from "./Leetcode";
import RoboAssignment from "./RoboticsAssignment";

const HomePage = () => {
  return (
    <Router>
      <div className="BodyDiv">
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent/>} />
          {/* <Route path="/DevBook" element={<DevBookProject/>} /> */}
          <Route path="/LeetJourney" element={<LeetJourney/>}/>
          <Route path="/Robotics" element={<RoboAssignment/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
