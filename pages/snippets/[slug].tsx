import { gql } from "@apollo/client";
import moment from "moment";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { Fragment } from "react";
import Container from "../../components/Container";
import Markdown from "../../components/Markdown";
import NewsLetterForm from "../../components/NewsLetterForm";
import client from "../../lib/apolloClient";
import { SnippetType } from "../../types";

const ProjectPage = ({ snippet }: { snippet: SnippetType }) => {
  return (
    <Fragment>
      <header className="py-8">
        <Container>
          <div className="flex flex-col items-start">
            {snippet.category && (
              <p className="text-lg font-medium mb-2 opacity-75">
                {snippet.category.title}
              </p>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold">{snippet.title}</h1>
          </div>
        </Container>
      </header>
      <main className="flex flex-col gap-16">
        <article>
          <Container>
            {snippet.body && <Markdown markdown={snippet.body} />}
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

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { snippets },
  } = await client.query({
    query: gql`
      query GetData {
        snippets {
          slug
        }
      }
    `,
  });

  const paths = snippets.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { snippets },
  } = await client.query({
    query: gql`
      query GetData {
        snippets(
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
      snippet: snippets[0],
    },
  };
};
