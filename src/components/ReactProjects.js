import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import data from "../data";

const ReactProjects = () => {
  const hello = useGlobalContext();

  return (
    <article className="react-projects">
      <h3>React Projects</h3>
      <div className="cards-container">
        {data.map((item) => {
          return <ReactProjectsItem key={item.id} {...item} />;
        })}
      </div>
    </article>
  );
};

const ReactProjectsItem = ({ id, name, img, info, url }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: img,
      }}
    >
      <div className="content active">
        <h4>{name} </h4>
        <p className="desc-project card-showed">{info}</p>
        <a
          href={url}
          className="btn project-dir card-showed"
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
