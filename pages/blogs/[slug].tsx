import { gql } from "@apollo/client";
import moment from "moment";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { Fragment } from "react";
import Container from "../../components/Container";
import Markdown from "../../components/Markdown";
import NewsLetterForm from "../../components/NewsLetterForm";
import client from "../../lib/apolloClient";
import { BlogType } from "../../types";

const BlogPage = ({ blog }: { blog: BlogType }) => {
  return (
    <Fragment>
      <header className="py-16">
        <Container>
          <div className="flex flex-col items-start">
            {blog.category && (
              <p className="text-lg font-medium mb-2 opacity-75">
                {blog.category.title}
              </p>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold">{blog.title}</h1>
            <div className="flex gap-4 w-full mt-2 opacity-75 items-center flex-wrap">
              <p className="flex-1 whitespace-nowrap">
                Published {moment(blog.updatedAt).format("DD MMM, yyy")}
              </p>
              <p>{3.4} min read</p>
              <p>{3402} Views</p>
            </div>
          </div>
        </Container>
      </header>
      <main className="flex flex-col gap-16">
        <article>
          <Container>
            {blog.body && <Markdown markdown={blog.body} />}
          </Container>
        </article>
        <section id="newsletter">
          <Container>
            <NewsLetterForm />
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs {
          slug
        }
      }
    `,
  });

  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(
          where: { slug: "${params.slug}" }
        ) {
          slug
          title
          body
          tags
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
      blog: blogs[0],
    },
  };
};
