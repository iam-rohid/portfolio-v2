import React from "react";
import { BlogType } from "../types";
import BlogCard from "./BlogCard";

const BlogsList = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.slug} />
      ))}
    </div>
  );
};

export default BlogsList;
