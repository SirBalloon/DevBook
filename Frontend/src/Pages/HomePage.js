import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import HomeContent from "../Components/HomeBody";
import Projects from "../Components/Projects";

const HomePage = () => {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default HomePage;
