import React from 'react';
import '../styles/main.scss';

/**
 * @name MainLayout
 * @description Serves as the main layout of the app. Always present this component as the wrapper
 * of every page in this app.
 */
const MainLayout = props => {
  const { children } = props;

  return <main>{children}</main>;
};

export default MainLayout;
