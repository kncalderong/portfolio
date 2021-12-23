import React, { useState, useEffect } from "react";
import reactProjects from "../data/projects";
import miniProjects from "../data/mini-projects";
import dvProjects from "../data/dv-projects";

const allCategories = ["React-projects", "Mini-projects", "Data-visualization"];

const Projects = () => {
  const [projects, setProjects] = useState(reactProjects);
  const [categories, setCategories] = useState(allCategories);

  const filterProjects = (category) => {
    if (category === "React-projects") {
      setProjects(reactProjects);
    }
    if (category === "Mini-projects") {
      setProjects(miniProjects);
    }
    if (category === "Data-visualization") {
      setProjects(dvProjects);
    }
  };

  return (
    <main className="projects-page">
      <div className="title">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      <Categories filterProjects={filterProjects} categories={categories} />
      <AllProjects projects={projects} />
    </main>
  );
};

const Categories = ({ filterProjects, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => {
              filterProjects(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

const AllProjects = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((item) => {
        const { id, url, info, name, img } = item;
        return (
          <article className="project-item" key={id}>
            <img src={img} alt={name} className="image" />
            <div className="project-info">
              <header>
                <h4>{name}</h4>
                <a href={url} target="_blank" className="link" rel="noreferrer">
                  Go to project
                </a>
              </header>
              <p className="project-text">{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
