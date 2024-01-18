import React from "react";
import Tab from "./ TabContainer";
import "../CSS/Body.css";
import "../CSS/Container.css";

const HomeContent = () => {
  return (
    <div className="homeBody">
      <header className="header">
        <h1>Projects</h1>
      </header>
      <main className="container">
        <section>
          <Tab title={"DevBook"} progress={"10%"}/>
        </section>
        <section>
          <Tab title={"Leetcode Journey"} progress={"0.5%"}/>
        </section>
      </main>
    </div>
  );
};

export default HomeContent;
