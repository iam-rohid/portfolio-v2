import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <Link href="#">
      <a>
        <article className="bg-white dark:bg-gray-800 border overflow-hidden border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Project Thumbnail"
            className="aspect-[16/9] object-cover"
          />
          <div className="p-4 flex flex-col gap-2">
            <h4 className="font-medium flex-1 text-xl">
              How to add dark mode in React/Next.js with Tailwind CSS project.
            </h4>
            <div className="flex gap-2 flex-wrap">
              <Tag name="React" />
              <Tag name="Next.js" />
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default ProjectCard;

const Tag = ({ name }: { name: string }) => {
  return (
    <p className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
      {name}
    </p>
  );
};
