/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import MainHeader from './main-header';
import MainFooter from './main-footer';
import '../scss/formare-docs.scss';

const Main = ({ children }) => {
  // const { title } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {/* <MainFooter /> */}
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
