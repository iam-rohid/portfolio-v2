import React from "react";
import { ProjectType } from "../types";
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
