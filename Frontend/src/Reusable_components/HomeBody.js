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
          <Tab link={"/CapstoneProject"} title={"Capstone Project"} progress={"90%"}  startdate={"03/03/25"} TechStack={"Python - PyQt5"} summary={"This project is a desktop application designed to analyze ABF (Axon Binary File) recordings related to extracellular signals, resonance frequency, and potassium (K⁺) clearance. It provides specialized tools for processing and interpreting neurophysiological data from these experimental modalities."}/>
        </section>
        <section>
          <Tab link={"/LeetJourney"} title={"Leetcode Journey"} progress={"0.5%"}  startdate={"08/01/24"} summary={"This is a display of my journey in shaping my skills using small problems. This Projects is mainly done in Typescript."}/>
        </section>
      </main>
    </div>
  );
};

export default HomeContent;
