import React from 'react';
import { graphql } from 'gatsby';
import DocsLayout from '../layouts/docs/docs-layout';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import SEO from 'components/SEO';

const DocsTemplate = ({ data }) => {
  const { mdx } = data;
  const { code, frontmatter } = mdx;

  return (
    <DocsLayout>
      <SEO title={mdx.frontmatter.title} />
      <div className="Container">
        <div className="DocsContent-heading">
          <h2 className="DocsContent-title">{frontmatter.title}</h2>
          <h4 className="DocsContent-subtitle">{frontmatter.description}</h4>
        </div>
        <div className="DocsContent-content">
          <MDXRenderer>{code.body}</MDXRenderer>
        </div>
      </div>
    </DocsLayout>
  );
};

export const query = graphql`
  query DocsByPath($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        path
        title
        description
      }
      code {
        body
      }
    }
  }
`;

export default DocsTemplate;
