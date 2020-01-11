import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';

import { CodePreview, CodeBlock } from 'components/code';
import DocsLayout from './docs-layout';
import SEO from 'components/seo';

const components = {
  table: props => {
    return (
      <div className="Table">
        <table {...props} />
      </div>
    );
    // return <table {...props} />;
  },
  pre: preProps => {
    // if we have props.children.props situation, we run preToCodeBlock util
    // to shorten import.
    const props = preToCodeBlock(preProps);
    let newProps = { ...props };

    if (props) {
      // if `preview=true` is passed, render <CodePreview /> component instead.
      if (props.preview) return <CodePreview {...newProps} />;
      return <CodeBlock {...newProps} />;
    }

    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
};

const DocsArticle = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <DocsLayout>
      <SEO title={mdx.frontmatter.title} />
      <div className="DocsArticle">
        <div className="DocsArticle-headline">
          <h1 className="DocsArticle-title">{frontmatter.title}</h1>
          <p className="DocsArticle-subtitle Heading-4">
            {frontmatter.description}
          </p>
        </div>
        <div className="DocsArticle-content u-MarginBottom-2xlarge">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
        {/* <div className="DocsArticle-footer">
          <div className="Grids">
            <div className="Grid Grid-12 Grid-md-6">
              <div className="LinkCard">
                <div className="LinkCard-body">
                  <div className="u-Color-gray">Previous</div>
                  <div className="u-FontSize-large u-FontWeight-semibold">
                    Nostrud aliquip
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid Grid-12 Grid-md-6">
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
        </div> */}
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
