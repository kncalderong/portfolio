import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const ReactProjects = () => {
  const hello = useGlobalContext();
  return (
    <article className="react-projects">
      <h3>React Projects</h3>
      <div className="cards-container">
        <div
          className="card"
          style={{
            backgroundImage:
              "url(http://adminassets.devops.arabiaweather.com/sites/default/files/field/image/mountains.jpg)",
          }}
        >
          <div className="content active">
            <h4>First project </h4>
            <p className="desc-project">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corporis aliquam sapiente, nulla praesentium
            </p>
            <a
              href="https://google.com"
              class="btn project-dir"
              target="_blank"
              rel="noreferrer"
            >
              Go to project
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const ReactProjectsItem = () => {};

export default ReactProjects;
