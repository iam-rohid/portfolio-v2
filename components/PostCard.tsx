import { EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const PostCard = () => {
  return (
    <Link href="#">
      <a>
        <article className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h4 className="font-medium flex-1 text-xl mb-1">
            How to add dark mode in React/Next.js with Tailwind CSS project.
          </h4>
          <div className="flex gap-4 mb-2">
            <p className="opacity-75">3.5 min read</p>
            <p className="opacity-75">34302 Views</p>
          </div>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nobis, velit ad vel qui assumenda cum molestias vero ipsa veritatis.
          </p>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
