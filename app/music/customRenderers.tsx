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

const customRenderers = [
  renderNodeRule(isHeading, ({ node, children, key }) => {
    const headingNode = node as Node & { level: number };
    switch (headingNode.level) {
      case 1:
        return (
          <h1
            key={key}
            className={`${inter.className} md:text-3xl text-lg my-4 transition-all`}
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
      // Add more cases for other heading levels if needed
      default:
        return <h6 key={key}>{children}</h6>;
    }
  }),
  renderNodeRule(isParagraph, ({ children, key }) => (
    <p
      key={key}
      className={`${inter.className} md:text-xl text-xs  transition-all md:px-4  text-pretty`}
    >
      {children}
    </p>
  )),
  renderNodeRule(isList, ({ node, children, key }) => {
    const listNode = node as Node & { style: "numbered" | "bulleted" };
    const listClass =
      listNode.style === "numbered" ? "list-decimal" : "list-disc";
    return (
      <ul
        key={key}
        className={`${listClass} ${inter.className} md:text-xl text-xs md:ml-12 pl-6 md:my-4 multi-column-list`}
      >
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
        className={`${inter.className} border-l-4 border-gray-400 pl-4 my-4 italic `}
      >
        {children}
        {blockquoteNode.attribution && (
          <cite className="block text-right not-italic mt-2 ">
            {blockquoteNode.attribution}
          </cite>
        )}
      </blockquote>
    );
  }),
];

export default customRenderers;
