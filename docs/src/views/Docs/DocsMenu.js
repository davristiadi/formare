import React from 'react';
import { Link } from 'react-router-dom';

const DocsMenu = () => {
  return (
    <div className="DocsMenu">
      <ul className="DocsMenu-list">
        <li className="DocsMenu-item">
          <Link to="/introduction" className="DocsMenu-link">
            Introduction
          </Link>
        </li>
        <li className="DocsMenu-item">
          <Link to="/layouts" className="DocsMenu-link">
            Layouts
          </Link>
        </li>
        <li className="DocsMenu-item">
          <Link to="/components" className="DocsMenu-link">
            Components
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DocsMenu;
