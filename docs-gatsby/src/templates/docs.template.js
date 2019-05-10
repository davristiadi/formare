import React from 'react';
import { graphql } from 'gatsby';
import DocsLayout from '../layout/docs/docs-layout';

const DocsTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

  return (
    <DocsLayout>
      <div className="Container">
        <div className="DocsContent-heading">
          <h2 className="u-FontWeight-bold">{frontmatter.title}</h2>
          <h5 className="heading-4 u-Color-gray">{frontmatter.description}</h5>
        </div>
        <div className="DocsContent-content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </DocsLayout>
  );
};

export const query = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
  }
`;

export default DocsTemplate;
