import React, { useState, useRef, useEffect } from "react";
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
  const cardRef = useRef(null);
  useEffect(() => {
    cardRef.current.style.backgroundImage = `url(${img})`;
  }, []);

  const handleActive = () => {
    cardRef.current.style.backgroundImage = active ? `url(${img})` : null;
    setActive(!active);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseOver={handleActive}
      onMouseOut={handleActive}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`project-title`}
        style={active ? { display: "none" } : null}
      >
        {name}
      </a>
      <div className={`content ${active ? "active" : "inactive"}`}>
        {/* <h4 className={`${active ? "card-showed" : "card-hidden"}`}>{name} </h4> */}
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
