import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarExample = props => {
  const { theme, size, className, ...attributes } = props;

  attributes.className = classNames(
		`Navbar`,
    theme ? `Navbar--${theme}` : null,
    size ? `Navbar--${size}` : null,
    className
  );

  return (
    <div className="fr-NavbarExample">
			<div {...attributes}>
				<div className="Navbar-block">
					<span className="fr-NavbarExample__logo">Logo</span>
				</div>
				<div className="Navbar-block">
					<nav className="Nav">
						<ul className="Nav-list">
							<li className="Nav-item">
								<a className="Nav-link">Home</a>
							</li>
							<li className="Nav-item">
								<a className="Nav-link">FAQ</a>
							</li>
							<li className="Nav-item">
								<a className="Nav-link">Contact Us</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
  );
};

NavbarExample.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string
};

export default NavbarExample;
