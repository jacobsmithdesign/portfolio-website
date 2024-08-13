import { renderNodeRule } from "react-datocms";
import {
  isHeading,
  isParagraph,
  isList,
  isListItem,
  isBlockquote,
  Node,
} from "datocms-structured-text-utils";
import { inter } from "../fonts/fonts";
import { useState } from "react";

// Custom function to detect code block nodes
const isCodeBlock = (node: Node) => {
  return node.type === "code";
};

const customRenderers = [
  renderNodeRule(isHeading, ({ node, children, key }) => {
    const headingNode = node as Node & { level: number };
    switch (headingNode.level) {
      case 1:
        return (
          <h1
            key={key}
            className={`${inter.className} md:text-3xl text-lg mb-4 transition-all text-left font-bold`}
          >
            {children}
          </h1>
        );
      case 2:
        return (
          <h2
            key={key}
            className={`${inter.className} md:text-2xl text-md my-4 transition-all`}
          >
            {children}
          </h2>
        );
      default:
        return <h6 key={key}>{children}</h6>;
    }
  }),
  renderNodeRule(isParagraph, ({ children, key }) => (
    <p
      key={key}
      className={`${inter.className} md:text-xl text-xs mb-8 transition-all text-pretty text-left`}
    >
      {children}
    </p>
  )),
  renderNodeRule(isList, ({ node, children, key }) => {
    const listNode = node as Node & { style: "numbered" | "bulleted" };
    const listClass =
      listNode.style === "numbered" ? "list-decimal" : "list-disc";
    return (
      <ul key={key} className={`${listClass} ${inter.className} ml-6 my-4`}>
        {children}
      </ul>
    );
  }),
  renderNodeRule(isListItem, ({ children, key }) => (
    <li key={key} className="my-1">
      {children}
    </li>
  )),
  renderNodeRule(isBlockquote, ({ node, children, key }) => {
    const blockquoteNode = node as Node & { attribution?: string };
    return (
      <blockquote
        key={key}
        className={`${inter.className} border-l-4 border-gray-400 pl-4 my-4 italic`}
      >
        {children}
        {blockquoteNode.attribution && (
          <cite className="block text-right not-italic mt-2">
            {blockquoteNode.attribution}
          </cite>
        )}
      </blockquote>
    );
  }),

  // Custom renderer for code blocks
  renderNodeRule(isCodeBlock, ({ node, key }) => {
    const [isOpen, setIsOpen] = useState(false);

    const codeNode = node as Node & { code: string; language: string };

    return (
      <div key={key} className="my-4">
        <button onClick={() => setIsOpen(!isOpen)} className="mb-2 underline">
          {isOpen ? "Hide code" : "Show code"}
        </button>
        {isOpen && (
          <pre className="p-4 rounded-md overflow-x-auto">
            <code className={`language-${codeNode.language}`}>
              {codeNode.code}
            </code>
          </pre>
        )}
      </div>
    );
  }),
];

export default customRenderers;
