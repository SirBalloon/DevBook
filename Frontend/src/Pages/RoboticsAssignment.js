import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/LeetContents.css";
import "../CSS/ProjectContent.css";

const RoboAssignment = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="homeBody">
      
    </div>
  );
};

export default RoboAssignment;
