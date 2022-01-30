import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHighlightjs from "remark-highlight.js";
import "remark-highlight.js";
import remarkHtml from "remark-html";

const Markdown = ({ markdown }: { markdown: string }) => {
  const md = markdown || "";
  return (
    <ReactMarkdown
      className="prose md:prose-lg max-w-none min-w-0 dark:text-white"
      remarkPlugins={[remarkMath, remarkGfm, remarkHtml, remarkHighlightjs]}
      rehypePlugins={[rehypeKatex]}
    >
      {md}
    </ReactMarkdown>
  );
};

export default Markdown;
