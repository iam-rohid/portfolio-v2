import React, { Fragment, useState } from "react";
import PageHeader from "../../components/PageHeader";
import PostsList from "../../components/PostsList";
import SectionWithTitle from "../../components/SectionWithTitle";

const BlogsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <PageHeader
        title="Blogs"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque fuga porro."
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        <SectionWithTitle title="Featured Projects">
          <PostsList />
        </SectionWithTitle>
        <SectionWithTitle title="All Projects">
          <PostsList />
        </SectionWithTitle>
      </main>
    </Fragment>
  );
};

export default BlogsPage;
