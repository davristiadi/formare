import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GlobalHeader extends Component {
	render() {
		return (
			<header className="fr-header">	
				<div className="navbar navbar--primary navbar--large">
					<div className="container flex jc-between">
						<div id="master-brand" className="navbar__block">
							<span id="master-logo">
								<Link to="/">Formare</Link>
							</span>
						</div>
						<div id="master-nav" className="navbar__block navbar__block--expanded">
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