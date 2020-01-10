/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from './main-header';
import MainProvider from './main-provider';
import 'scss/formare-docs.scss';
import './main.scss';
import { registerIcons } from 'utilities/fa-library';

registerIcons();

const MainLayout = props => {
  const { children } = props;

  return (
    <MainProvider>
      <MainHeader />
      <main className="MainBody">{children}</main>
      {/* <MainFooter /> */}
    </MainProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
