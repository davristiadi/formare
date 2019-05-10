import React from 'react';
import DocsLayout from '../../layout/docs/docs-layout';
import SEO from '../../components/seo';

const Docs = () => {
  return (
    <>
      <SEO title="Documentation" />
      <DocsLayout>
        <div>Docs Home</div>
      </DocsLayout>
    </>
  );
};

export default Docs;
