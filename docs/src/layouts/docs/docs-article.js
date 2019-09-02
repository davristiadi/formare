import React from 'react';
import { graphql } from 'gatsby';
import DocsLayout from './docs-layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'components/seo';

const DocsArticle = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <DocsLayout>
      <SEO title={mdx.frontmatter.title} />
      <div className="DocsArticle">
        <div className="DocsArticle-headline">
          <h1 className="DocsArticle-title">{frontmatter.title}</h1>
          <p className="DocsArticle-subtitle">{frontmatter.description}</p>
        </div>
        <div className="DocsArticle-content u-MarginBottom-2xlarge">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="DocsArticle-footer">
          <div className="Grids">
            <div className="Grid Grid-6">
              <div className="LinkCard">
                <div className="LinkCard-body">
                  <div className="u-Color-gray">Previous</div>
                  <div className="u-FontSize-large u-FontWeight-semibold">
                    Nostrud aliquip
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid Grid-6">
              <div className="LinkCard">
                <div className="LinkCard-body u-Align-right">
                  <div className="u-Color-gray">Next up</div>
                  <div className="u-FontSize-large u-FontWeight-semibold">
                    Cillum
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      body
    }
  }
`;

export default DocsArticle;
