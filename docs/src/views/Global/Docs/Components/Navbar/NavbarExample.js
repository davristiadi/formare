import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavbarExample = props => {
  const { theme, size, className, ...attributes } = props;

  attributes.className = classNames(
    `navbar`,
    theme ? `navbar--${theme}` : null,
    size ? `navbar--${size}` : null,
    className
  );

  return (
    <div className="fr-navbar-example">
			<div {...attributes}>
				<div className="navbar__block">
					<span id="logo">Logo</span>
				</div>
				<div className="navbar__block navbar__block--end">
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__item">
								<a className="nav__link">Home</a>
							</li>
							<li className="nav__item">
								<a className="nav__link">FAQ</a>
							</li>
							<li className="nav__item">
								<a className="nav__link">Contact Us</a>
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
