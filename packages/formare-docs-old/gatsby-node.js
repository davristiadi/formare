/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const docsTemplate = path.resolve(`src/layouts/docs/docs-article.js`);
  const allMdxQuery = `
    {
      allMdx {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
    }
  `;

  return graphql(allMdxQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMdx.edges;
    posts.forEach(({ node }, index) => {
      const path = node.frontmatter.path;
      const context = {
        id: node.id,
        pathSlug: path,
      };
      createPage({
        path,
        component: docsTemplate,
        context,
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
