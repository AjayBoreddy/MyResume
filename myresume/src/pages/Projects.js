import React from "react";
import ProjectItem from "../pages/ProjectItem";
import { ProjectList } from "../pages/ProjectList";
import Header from "../components/Header";

import "../styles/style.css";

function Projects() {
  return (
    <div class="container-fluid p-0">
        <Header />
   
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Projects;