import React from "react";
// import Tab from "./TabContainer";
import "../CSS/Body.css";
import "../CSS/Container.css";
import "../CSS/Cabinet.css"
import Cabinet from "./Cabinet";
import InfoBubble from "./InfoBubble";

const HomeContent = () => {
  return (
    <>
    <div className="LeftBody">
      <header className="header">
        <h1>Projects</h1>
      </header>
      <main className="Leftcontainer">
        <Cabinet/>
      </main>
      <header className="header">
        <h1>Releases and Updates</h1>
      </header>
      <div>
        
      </div>
    </div>
    <div className="RightBody">
      <div className="Rightcontainer">
          <div className="PC_container">
            <InfoBubble/>
          </div>
      </div>
    </div>
    </>
  );
};

export default HomeContent;
