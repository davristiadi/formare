import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GlobalHeader extends Component {
	render() {
		return (
			<header className="fr-header fr-header--fixed">	
				<div className="navbar navbar--primary">
					<div className="container jc-between">
						<div className="navbar__block navbar__block--start">
							<span id="master-logo">
								<Link to="/">Formare</Link>
							</span>
						</div>
						<div className="navbar__block navbar__block--end">
							<nav className="nav">
								<ul className="nav__list">
									<li className="nav__item">
										<Link to="/getting-started" className="nav__link">Getting Started</Link>
									</li>
									<li className="nav__item">
										<Link to="/docs" className="nav__link">Documentation</Link>
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