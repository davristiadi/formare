import React from 'react';

const MainNav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav-list">
        <li className="Nav-item">
          <a href="/docs" className="Nav-link">
            Docs
          </a>
        </li>

        <li className="Nav-item">
          <a className="Nav-link">Github</a>
        </li>
        <li className="Nav-item">
          <a className="Nav-link">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
