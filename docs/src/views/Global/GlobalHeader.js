import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class GlobalHeader extends Component {
	render() {
		return (
			<header className="fr-global-header">
				<div className="navbar navbar--primary">
					<div className="container flex jc-between">
						<div id="master-brand" className="navbar__block">
							<div className="pd-left pd-right">
								<NavLink to="/" className="color-lighter fw-semibold fs-x-large">Formare</NavLink>
							</div>	
						</div>
						<div id="master-nav" className="navbar__block navbar__block--expanded">
							<nav className="nav">
								<ul className="nav__list">
									<li className="nav__item">
										<NavLink className="nav__link" to="/docs">Documentation</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div className="navbar__block navbar__block--end">
							<nav className="nav">
								<ul className="nav__list">
									<li className="nav__item">
										<button className="button button--secondary">
											<i className="fas fa-download mg-right"></i>
											Download
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default GlobalHeader;