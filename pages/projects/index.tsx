import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { Fragment, useEffect, useState } from "react";
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
  const [searchedProjects, setSearchedProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    let _projects: ProjectType[] = [];
    let searchKeywords = searchValue.split(" ");
    _projects = allProjects.filter((b) => {
      let matched = false;
      searchKeywords.forEach((key) => {
        if (b.title.toLowerCase().match(key.toLowerCase())) {
          matched = true;
          return;
        } else if (b.category.title.toLowerCase().match(key.toLowerCase())) {
          matched = true;
          return;
        }
      });
      return matched;
    });
    setSearchedProjects(_projects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Fragment>
      <PageHeader
        title="My Projects"
        description="Here are some of my projects. Some of them are public and others are private. You can find source code inside if it's a public project."
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        {searchValue ? (
          <SectionWithTitle
            title="Results"
            trailing={`${searchedProjects.length} Projects`}
          >
            <ProjectsList projects={searchedProjects} />
          </SectionWithTitle>
        ) : (
          <Fragment>
            <SectionWithTitle title="Featured Projects">
              <ProjectsList projects={featuredProjects} />
            </SectionWithTitle>
            <SectionWithTitle
              title="All Projects"
              trailing={`${allProjects.length} Projects`}
            >
              <ProjectsList projects={allProjects} />
            </SectionWithTitle>
          </Fragment>
        )}
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
