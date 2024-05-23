import React from "react";
import Tab from "./TabContainer";
import "../CSS/Body.css";
import "../CSS/Container.css";

const HomeContent = () => {
  return (
    <div className="homeBody">
      <header className="header">
        <h1>Projects</h1>
      </header>
      <main className="container">
        {/* <section>
          <Tab link={"/DevBook"} title={"DevBook"} progress={"10%"} startdate={"05/01/24"} summary={"A portofolio that highlighting my journey as a Software Developer and Creative"}/>
        </section> */}
        <section>
          <Tab link={"/LeetJourney"} title={"Leetcode Journey"} progress={"0.5%"}  startdate={"08/01/24"} summary={"This is a display of my journey in shaping my skills using small problems. This Projects is mainly done in Typescript."}/>
        </section>
        <section>
          <Tab link={"/RoboAssignment"} title={"Robotics Assignment"} progress={"50%"}  startdate={""} summary={"This is a Uni - Robotics programming Assignment."}/>
        </section>
      </main>
    </div>
  );
};

export default HomeContent;
