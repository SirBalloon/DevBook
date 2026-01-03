import React, {useState} from "react";
import "../CSS/Body.css";
import "../CSS/Container.css";
import "../CSS/Cabinet.css"
import Cabinet from "./Cabinet";
import InfoBubble from "./InfoBubble";
import InfoData from "../JSONfiles/InfoData.json"

const HomeContent = () => {
  const [InfoPack, SetInfoPack] = useState("AboutMe");

  const resetInfo = () => {
    SetInfoPack("AboutMe");
  };

  return (
    <>
    <div className="LeftBody">
      <header className="header">
        <h1>Projects</h1>
      </header>
      <main className="Leftcontainer">
        <Cabinet SetInfoPack={SetInfoPack}/>
      </main>
    </div>
    <div className="RightBody">
      <div className="Rightcontainer">
          <InfoBubble key={InfoPack} InfoData={InfoData[InfoPack]} Layout={InfoPack} onReset={resetInfo}/>
      </div>
    </div>
    </>
  );
};

export default HomeContent;
