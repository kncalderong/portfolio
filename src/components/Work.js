import React from "react";

import ReactProjects from "./ReactProjects";
import MiniProjects from "./MiniProjects";
import DataProjects from "./DataProjects";
const Work = () => {
  return (
    <section id="work-section" className="work-section">
      <div className="title">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      <ReactProjects />
      <MiniProjects />
      <DataProjects />
    </section>
  );
};

export default Work;
