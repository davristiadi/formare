import React from 'react';
import { MainLayout } from 'layouts/main';
import DocsMenu from './docs-menu';
import DocsContent from './docs-content';
import './docs.scss';

const DocsLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="Docs">
        <DocsMenu />
        <DocsContent>{children}</DocsContent>
      </div>
    </MainLayout>
  );
};

export default DocsLayout;
