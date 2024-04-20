import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../pages/ProjectList";
import Header from "../components/Header";

import "../styles/style.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div class="container-fluid p-0">
        <Header />
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href="https://github.com/AjayBoreddy?tab=repositories" target="_blank" rel="noopener noreferrer">  <i class="fab fa-github"></i></a>
    </div>
    </div>
  );
}

export default ProjectDisplay;