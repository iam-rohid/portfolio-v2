import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectType } from "../types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <a>
        <article className="bg-white dark:bg-gray-800 border overflow-hidden border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 h-full flex flex-col">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.coverPhoto.url}
              alt="Project Thumbnail"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-2 justify-between flex-1">
            <h4 className="font-bold flex-1 text-xl">{project.title}</h4>
            <div className="flex gap-2 flex-wrap">
              {project.category && <Category name={project.category.title} />}
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default ProjectCard;

const Category = ({ name }: { name: string }) => {
  return (
    <p className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
      {name}
    </p>
  );
};
