import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableContent from "../Components/TOCcontent";


const HomePage = () => {
  return (
    <Router>
        <Routes>
          <Route path="/001" element={<TableContent content={"LeetCode Content"}/>} />
        </Routes>
    </Router>
  );
};

export default HomePage;
