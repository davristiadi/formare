import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const MainHeader = ({ siteTitle }) => {
  return (
    <header className="MainHeader">
      <div className="Navbar Navbar--primary">
        <div className="Container Container--fullWidth u-Flex u-Flex-row">
          <NavbarBrand />
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
};

const NavbarBrand = () => (
  <div className="Navbar-block u-PaddingLeft u-PaddingRight-large">
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
    <div className="Navbar-block ">
      <nav className="Nav">
        <ul className="Nav-list">
          <li className="Nav-item">
            <Link
              className="Nav-link"
              to="/docs/getting-started"
              activeClassName="is-active"
            >
              Documentation
            </Link>
          </li>
          <li className="Nav-item">
            <Link
              className="Nav-link"
              to="/docs/getting-started"
              activeClassName="is-active"
            >
              Github
            </Link>
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
