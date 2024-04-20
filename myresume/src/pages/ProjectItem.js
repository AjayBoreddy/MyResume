import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import Header from "../components/Header";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div class="container-fluid p-0">
        <Header />
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
    </div>
  );
}

export default ProjectItem;