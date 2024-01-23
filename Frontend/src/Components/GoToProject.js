import React from "react";

const LinkedButton = ({ link }) => {
  return (
    <button className="ProjectGoToButton" onClick={link}>
      Go to Project
    </button>
  );
};

export default LinkedButton;
