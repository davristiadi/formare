import React, { PropTypes } from 'react';
import TablePreview from './TablePreview';

const Table = props => {
  return (
    <div id="card">
      <article className="DocsArticle">
        <div className="DocsArticle-heading">
          <h2 className="DocsArticle-title">Table</h2>
          <h5 className="DocsArticle-subtitle">
            Officia ullamco sit aliqua consectetur commodo tempor magna fugiat
            aliqua cillum.
          </h5>
        </div>
        <section className="DocsArticle-section">
          <div className="Heading">
            <h4 className="Title">Overview</h4>
          </div>
          <p>
            Nostrud sint id velit ipsum nulla irure labore quis. Aliqua cillum
            non pariatur ad est non.
          </p>
          <TablePreview />
        </section>
        <section className="DocsArticle-section">
          <div className="Heading">
            <h4 className="Title">Themes</h4>
          </div>
          <p>
            Pariatur adipisicing consectetur minim sit ex est id proident
            consequat ullamco ea fugiat.
          </p>
          <TablePreview theme="dark" />
        </section>
        <section className="DocsArticle-section">
          <div className="Heading">
            <h4 className="Title">Modifiers</h4>
          </div>
          <div className="Heading">
            <h5 className="Title">Striped Table</h5>
          </div>
          <p>
            Anim voluptate minim reprehenderit duis fugiat irure sit cupidatat
            excepteur est.
          </p>
          <TablePreview striped />
        </section>
      </article>
    </div>
  );
};

Table.propTypes = {};

export default Table;
