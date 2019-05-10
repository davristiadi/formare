import React from 'react';
import { Link } from 'gatsby';
import './docs.scss';

const DocsMenu = () => {
  return (
    <aside className="DocsMenu">
      <ul className="DocsMenu-list">
        <li className="DocsMenu-item">
          <Link
            className="DocsMenu-link"
            to="/docs/getting-started"
            activeClassName="is-active">
            Getting Started
          </Link>
        </li>
        <li className="DocsMenu-item">
          <Link className="DocsMenu-link" to="/docs/quick-start">
            Quick Start
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DocsMenu;
