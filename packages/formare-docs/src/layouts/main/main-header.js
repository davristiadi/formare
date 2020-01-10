import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const MainHeader = ({ siteTitle }) => {
  return (
    <header className="MainHeader">
      <div className="Navbar Navbar--primary">
        <div className="Navbar-container Navbar-container--fullWidth">
          <NavbarBrand />
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
};

const NavbarBrand = () => (
  <div className="MainHeader-brand Navbar-block">
    <Link
      to="/"
      className="u-FontSize-xlarge u-FontWeight-semibold u-Color-light"
    >
      Formare
    </Link>
  </div>
);

const NavbarMenu = () => {
  return (
    <div className="MainHeader-menu Navbar-block Navbar-block--expanded">
      <nav className="Nav">
        <ul className="Nav-list">
          <li className="Nav-item">
            <Link
              className="Nav-link"
              to="/docs/introduction/getting-started"
              activeClassName="is-active"
              partiallyActive={true}
            >
              Documentation
            </Link>
          </li>
          <li className="Nav-item">
            <a
              href="https://github.com/dkk94/formare"
              target="_blank"
              rel="noopener noreferrer"
              className="Nav-link"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

MainHeader.propTypes = {
  siteTitle: PropTypes.string,
};

MainHeader.defaultProps = {
  siteTitle: ``,
};

export default MainHeader;
