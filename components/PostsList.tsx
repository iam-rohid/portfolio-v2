import React from "react";
import PostCard from "./PostCard";

const PostsList = () => {
  return (
    <div className="flex flex-col gap-2">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostsList;
