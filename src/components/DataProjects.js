import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "../data/dv-projects";
import { useGlobalContext } from "../context";

const DataProjects = () => {
  const { filterProjects } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState(data);

  useEffect(() => {
    const lastProject = projects.length - 1;
    if (index < 0) {
      setIndex(lastProject);
    }
    if (index > lastProject) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider); //it has to have a cleanup function because multiple clicks will trigger multiple intervals
  }, [index]);

  return (
    <article className="data-projects">
      <h3 className="subtitle">
        <span>/</span>Data visualization projects :
      </h3>
      <div className="dv-container">
        {projects.map((project, projectIndex) => {
          const { id, name, url, info, img } = project;

          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={`dv-item ${position}`} key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt="rise of nations" className="dv-img" />
              </a>
              <h3>{name}</h3>
              <p>{info}</p>
            </div>
          );
        })}

        <button className="prev">
          <FiChevronLeft size={30} onClick={() => setIndex(index - 1)} />
        </button>
        <button className="next">
          <FiChevronRight size={30} onClick={() => setIndex(index + 1)} />
        </button>
      </div>
      <Link
        to="/projects"
        className="show-all"
        onClick={() => {
          filterProjects("Data-visualization");
        }}
      >
        Show All
      </Link>
    </article>
  );
};

export default DataProjects;
