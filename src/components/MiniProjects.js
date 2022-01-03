import React from "react";
import data from "../data/mini-projects";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const positions = [
  "",
  "1/1/3/3",
  "1/3/2/5",
  "2/3/3/4",
  "2/4/4/5",
  "4/4/5/5",
  "3/2/5/4",
  "3/1/5/2",
];
const sizes = ["", "420px"];

const MiniProjects = () => {
  const { filterProjects } = useGlobalContext();
  return (
    <article className="mini-projects">
      <h3 className="subtitle">
        <span>/</span>React Mini-Projects (Components) :
      </h3>
      <div className="collage-container">
        {data.slice(0, 7).map((item) => {
          return <MiniProjectItem {...item} key={item.id} />;
        })}
      </div>
      <Link
        to="/projects"
        className="show-all"
        onClick={() => {
          filterProjects("Mini-projects");
        }}
      >
        Show All
      </Link>
    </article>
  );
};

const MiniProjectItem = ({ url, id, img, name }) => {
  return (
    <a
      href={url}
      className="item-collage"
      style={{
        backgroundImage: `url(${img})`,
        gridArea: positions[id],
      }}
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="project-title">{name}</h3>
    </a>
  );
};

export default MiniProjects;
