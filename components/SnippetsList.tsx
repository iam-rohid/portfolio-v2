import React from "react";
import { SnippetType } from "../types/snippetType";
import SnippetCard from "./SnippetCard";

const SnippetsList = ({ snippets }: { snippets: SnippetType[] }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {snippets.map((snippet) => (
        <SnippetCard snippet={snippet} key={snippet.slug} />
      ))}
    </div>
  );
};

export default SnippetsList;
