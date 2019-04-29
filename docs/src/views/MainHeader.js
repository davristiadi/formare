import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import MainNav from './MainNav';

const MainHeader = () => {
  return (
    <header className="MainHeader">
      <div className="Navbar Navbar--primary Navbar--small Navbar--white">
        <div className="Container Container--fullWidth u-Flex-row">
          <div className="Navbar-block u-PaddingRight">
            <MainBrand />
          </div>
          <div className="Navbar-block u-PaddingLeft u-PaddingRight">
            <MainNav />
          </div>
        </div>
      </div>
    </header>
  );
};

const MainBrand = () => {
  const classes = classNames(
    `u-FontWeight-bold`,
    `u-Color-light`,
    `u-FontSize-xlarge`,
  );

  return (
    <NavLink to="/" className={classes}>
      Formare
    </NavLink>
  );
};

export default MainHeader;
