import { EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { BlogType } from "../types";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <a>
        <article className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 p-4 rounded-xl hover:border-gray-300 dark:hover:border-gray-600">
          <h4 className="font-bold flex-1 text-xl mb-1">{blog.title}</h4>
          <div className="flex gap-4 mb-2">
            <p className="opacity-75">3.5 min read</p>
            <p className="opacity-75">34302 Views</p>
          </div>
          <p className="opacity-75">{blog.excerpt}</p>
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
