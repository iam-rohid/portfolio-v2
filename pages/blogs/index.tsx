import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { Fragment, useState } from "react";
import PageHeader from "../../components/PageHeader";
import BlogsList from "../../components/BlogsList";
import SectionWithTitle from "../../components/SectionWithTitle";
import client from "../../lib/apolloClient";
import { BlogType } from "../../types";

const BlogsPage = ({
  allBlogs,
  featuredBlogs,
}: {
  allBlogs: BlogType[];
  featuredBlogs: BlogType[];
}) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Fragment>
      <PageHeader
        title="Blogs"
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        <SectionWithTitle title="Featured Blogs">
          <BlogsList blogs={featuredBlogs} />
        </SectionWithTitle>
        <SectionWithTitle title="All Blogs">
          <BlogsList blogs={allBlogs} />
        </SectionWithTitle>
      </main>
    </Fragment>
  );
};

export default BlogsPage;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { blogs: allBlogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(orderBy: createdAt_DESC) {
          slug
          title
          excerpt
          isFeatured
          createdAt
          updatedAt
          category {
            slug
            title
          }
        }
      }
    `,
  });
  const {
    data: { blogs: featuredBlogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(orderBy: createdAt_DESC, first: 3, where: { isFeatured: true }) {
          slug
          title
          excerpt
          createdAt
          updatedAt
          category {
            slug
            title
          }
        }
      }
    `,
  });
  return {
    props: {
      allBlogs,
      featuredBlogs,
    },
  };
};
