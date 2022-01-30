import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectsList;
