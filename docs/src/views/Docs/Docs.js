import React from 'react';
import DocsMenu from './DocsMenu';
import DocsRoutes from './DocsRoutes';
import './Docs.scss';

const Docs = () => {
  return (
    <div className="Docs">
      <DocsMenu />
      <DocsRoutes />
    </div>
  );
};

export default Docs;
