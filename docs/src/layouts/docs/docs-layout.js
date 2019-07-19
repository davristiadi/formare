import React from 'react';
import MainLayout from '../main-layout';
import DocsMenu from './docs-menu';
import './docs.scss';

const DocsLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="Docs">
        <DocsMenu />
        <article className="DocsContent">{children}</article>
      </div>
    </MainLayout>
  );
};

export default DocsLayout;
