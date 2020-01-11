import React from 'react';
import { StaticQuery } from 'gatsby';

const Image = props => {
  const imageQuery = graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={imageQuery}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename);
        });
        if (!image) {
          return null;
        }

        return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />;
      }}
    />
  );
};

export default Image;
