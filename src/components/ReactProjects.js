import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import data from "../data/projects";

const ReactProjects = () => {
  const { filterProjects } = useGlobalContext();

  return (
    <article className="react-projects">
      <h3 className="subtitle">
        <span>/</span>React Projects :
      </h3>
      <div className="cards-container">
        {data.slice(0, 4).map((item) => {
          return <ReactProjectsItem key={item.id} {...item} />;
        })}
      </div>

      <Link
        to="/projects"
        className="show-all"
        onClick={() => {
          filterProjects("React-projects");
        }}
      >
        Show all
      </Link>
    </article>
  );
};

const ReactProjectsItem = ({ id, name, img, info, url }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${img})`,
      }}
      onMouseOver={handleActive}
      onMouseOut={handleActive}
    >
      <div className={`content ${active ? "active" : "inactive"}`}>
        <h4>{name} </h4>
        <p className={`desc-project ${active ? "card-showed" : "card-hidden"}`}>
          {info}
        </p>
        <a
          href={url}
          className={`btn project-dir ${
            active ? "card-showed" : "card-hidden"
          }`}
          target="_blank"
          rel="noreferrer"
        >
          Go to project
        </a>
      </div>
    </div>
  );
};

export default ReactProjects;
