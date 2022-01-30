import React, { Fragment, useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProjectsList from "../../components/ProjectsList";
import SectionWithTitle from "../../components/SectionWithTitle";

const ProjectsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <PageHeader
        title="My Projects"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque fuga porro."
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        <SectionWithTitle title="Featured Projects">
          <ProjectsList />
        </SectionWithTitle>
        <SectionWithTitle title="All Projects">
          <ProjectsList />
        </SectionWithTitle>
      </main>
    </Fragment>
  );
};

export default ProjectsPage;
