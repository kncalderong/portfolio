import React, { useState, useContext, useEffect } from "react";
import reactProjects from "./data/projects";
import miniProjects from "./data/mini-projects";
import dvProjects from "./data/dv-projects";

const AppContext = React.createContext();

//to connect home page with projects page, corresponding projects group selected
const allCategories = ["React-projects", "Mini-projects", "Data-visualization"];

const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState(reactProjects);
  const [categories, setCategories] = useState(allCategories);
  const [projectsActive, setProjectsActive] = useState("React-projects");
  const filterProjects = (category) => {
    if (category === "React-projects") {
      setProjects(reactProjects);
      setProjectsActive("React-projects");
    }
    if (category === "Mini-projects") {
      setProjects(miniProjects);
      setProjectsActive("Mini-projects");
    }
    if (category === "Data-visualization") {
      setProjects(dvProjects);
      setProjectsActive("Data-visualization");
    }
  };

  return (
    <AppContext.Provider
      value={{ filterProjects, categories, projects, projectsActive }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
