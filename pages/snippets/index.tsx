import React, { Fragment } from "react";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SectionWithTitle from "../../components/SectionWithTitle";
import SnippetsList from "../../components/SnippetsList";

const SnippetsPage = () => {
  return (
    <Fragment>
      <PageHeader
        title="Snippets"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, provident dolorem natus laborum adipisci odio."
      />
      <main className="flex flex-col gap-16 py-16">
        <Container>
          <SnippetsList />
        </Container>
      </main>
    </Fragment>
  );
};

export default SnippetsPage;
