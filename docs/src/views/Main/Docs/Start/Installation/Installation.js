import React, { memo } from 'react';
import { Highlight } from 'components/Highlight';

const Installation = props => {
  return (
    <div id="installation-docs">
      <article className="fr-DocsArticle">
        <div className="fr-DocsArticle-intro">
          <div className="fr-DocsArticle-heading">
            <h2 className="fr-DocsArticle-title">Installation</h2>
            <h5 className="fr-DocsArticle-subtitle">Super simple ways to implement Formare into your project.</h5>
          </div>
        </div>
        <section id="package-manager" className="fr-DocsArticle-section">
          <div className="Heading u-Flex">
            <h4 className="Title">Package Managers</h4>
          </div>
          <p>
            Formare is available to download from some of the most popular package managers out there.
          </p>
          <p>You can use <strong>NPM</strong>:</p>
          <Highlight lang="vim">
            {`$ npm install formare`}
          </Highlight>
          <p>or <strong>Yarn</strong>:</p>
          <Highlight lang="vim">
            {`$ yarn add formare`}
          </Highlight>
        </section>
        <section id="direct-download" className="fr-DocsArticle-section">
          <div className="Heading">
            <h4 className="Title">Direct Download</h4>
          </div>
          <p>If you'd prefer to add our files directly, you can do so by <a>downloading Formare's latest version.</a></p>
        </section>
      </article>
    </div>
  );
};

export default Installation;