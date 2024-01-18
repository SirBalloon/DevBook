import React from "react";
import Tab from "./ TabContainer";
import "../CSS/Body.css";
import "../CSS/Container.css";

const HomeContent = () => {
  return (
    <div className="homeBody">
      <header>
        <h1>Projects</h1>
      </header>
      <main className="container">
        <section>
          <Tab title={"DevBook"}/>
        </section>
        <section>
          <Tab title={"Leetcode Journey"}/>
        </section>
      </main>
    </div>
  );
};

export default HomeContent;
