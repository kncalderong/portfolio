import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "../data/dv-projects";

const DataProjects = () => {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState(data);
  return (
    <article className="data-projects">
      <h3 className="subtitle">Data visualization projects :</h3>
      <div className="dv-container">
        {projects.map((project, projectIndex) => {
          const { id, name, url, info, img } = project;
          return (
            <div className="dv-item activeSlide" key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt="rise of nations" className="dv-img" />
              </a>
              <h3>{name}</h3>
              <p>{info}</p>
            </div>
          );
        })}

        <button className="prev">
          <FiChevronLeft size={30} />
        </button>
        <button className="next">
          <FiChevronRight size={30} />
        </button>
      </div>
      <Link to="/projects" className="show-all">
        Show All
      </Link>
    </article>
  );
};

export default DataProjects;
