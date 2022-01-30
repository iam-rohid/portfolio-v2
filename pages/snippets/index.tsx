import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { Fragment } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SnippetsList from "../../components/SnippetsList";
import client from "../../lib/apolloClient";
import { SnippetType } from "../../types";

const SnippetsPage = ({ snippets }: { snippets: SnippetType[] }) => {
  return (
    <Fragment>
      <PageHeader
        title="Snippets"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, provident dolorem natus laborum adipisci odio."
      />
      <main className="flex flex-col gap-16 py-16">
        <Container>
          <SnippetsList snippets={snippets} />
        </Container>
      </main>
    </Fragment>
  );
};

export default SnippetsPage;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { snippets },
  } = await client.query({
    query: gql`
      query MyQuery {
        snippets(orderBy: updatedAt_DESC) {
          slug
          title
          excerpt
          isFeatured
          updatedAt
          createdAt
          category {
            title
            slug
          }
        }
      }
    `,
  });
  return {
    props: {
      snippets,
    },
  };
};
