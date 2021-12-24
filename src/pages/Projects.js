import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  //to always open on top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="projects-page">
      <Link to="/" className="back-home">
        <FaHome size={20} />
      </Link>
      <div className="title">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <AllProjects />
    </main>
  );
};

const Categories = () => {
  const { filterProjects, categories, projectsActive } = useGlobalContext();
  console.log(projectsActive);
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className={`filter-btn ${
              item === projectsActive && "filter-active"
            }`}
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

const AllProjects = () => {
  const { projects } = useGlobalContext();
  return (
    <div className="projects-page-container">
      {projects.map((item) => {
        const { id, url, info, name, img } = item;
        return (
          <article className="project-page-item" key={id}>
            <img src={img} alt={name} className="image-page" />
            <div className="project-page-info">
              <header>
                <h4>{name}</h4>
                <a
                  href={url}
                  target="_blank"
                  className="link-page"
                  rel="noreferrer"
                >
                  Go to project
                </a>
              </header>
              <p className="project-page-text">{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Projects;
