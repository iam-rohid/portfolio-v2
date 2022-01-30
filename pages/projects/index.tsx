import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { Fragment, useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProjectsList from "../../components/ProjectsList";
import SectionWithTitle from "../../components/SectionWithTitle";
import client from "../../lib/apolloClient";
import { ProjectType } from "../../types";

const ProjectsPage = ({
  allProjects,
  featuredProjects,
}: {
  allProjects: ProjectType[];
  featuredProjects: ProjectType[];
}) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <PageHeader
        title="My Projects"
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        <SectionWithTitle title="Featured Projects">
          <ProjectsList projects={featuredProjects} />
        </SectionWithTitle>
        <SectionWithTitle title="All Projects">
          <ProjectsList projects={allProjects} />
        </SectionWithTitle>
      </main>
    </Fragment>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { projects: allProjects },
  } = await client.query({
    query: gql`
      query GetData {
        projects(orderBy: createdAt_DESC) {
          slug
          title
          createdAt
          updatedAt
          isFeatured
          category {
            slug
            title
          }
          coverPhoto {
            url
          }
        }
      }
    `,
  });
  const {
    data: { projects: featuredProjects },
  } = await client.query({
    query: gql`
      query GetData {
        projects(
          orderBy: createdAt_DESC
          first: 2
          where: { isFeatured: true }
        ) {
          slug
          title
          createdAt
          updatedAt
          category {
            slug
            title
          }
          coverPhoto {
            url
          }
        }
      }
    `,
  });
  return {
    props: {
      allProjects,
      featuredProjects,
    },
  };
};
