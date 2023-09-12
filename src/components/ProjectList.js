import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 
  const array = projects.map(value => {
    return <ProjectItem key={value.id} name={value.name} about={value.about} technologies={value.technologies} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{array}</div>
    </div>
  );
}

export default ProjectList;
