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
  <div className="Navbar-block">
    <Link
      to="/"
      className="u-FontSize-xlarge u-FontWeight-semibold u-Color-light">
      Formare
    </Link>
  </div>
);

const NavbarMenu = () => {
  return (
    <div className="Navbar-block">
      <nav className="Nav" />
    </div>
  );
};

// gatsby-initial
//
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

MainHeader.propTypes = {
  siteTitle: PropTypes.string,
};

MainHeader.defaultProps = {
  siteTitle: ``,
};

export default MainHeader;
