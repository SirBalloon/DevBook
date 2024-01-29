import React from "react";
import "../CSS/ProjectTOC.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const TableContent = ({ content }) => {
  if (!content) {
    return (
      <div className="ContentDiv">
        <p>No content found for the selected title.</p>
      </div>
    );
  }

  const { title, description, Solution, Research, language, code } = content;

  return (
    <div className="ContentDiv">
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <h4>Problem Description</h4>
        <p>{description}</p>
        <h4>Research</h4>
        <p>{Research}</p>
        <h4>Solution</h4>
        <p>{Solution}</p>
      </div>
      <div className="code-block">
        <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default TableContent;
