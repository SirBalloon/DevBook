import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "../Reusable_components/Header";
import Header2 from "../Reusable_components/SideBar";
import HomeContent from "../Reusable_components/HomeBody";
// import DevBookProject from "./DevBook";
// import LeetJourney from "../Projects/Leetcode/Leetcode";
// import CapstoneProject from "../Projects/CapstoneProj/CapstoneProject";
// import ElectronicsProg from "../Projects/ElectronicProg/ElectronicsProg";

const HomePage = () => {
  return (
    <Router>
      <div className="FlexDiv">
        <Header2 />
        <div className="BodyDiv">
          <Routes>
            <Route path="/" element={<HomeContent/>} />
            {/* <Route path="/DevBook" element={<DevBookProject/>} /> */}
            {/* <Route path="/LeetJourney" element={<LeetJourney/>}/>
            <Route path="/CapstoneProject" element={<CapstoneProject/>}/>
            <Route path="/ElecSoftware" element={<ElectronicsProg/>}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
