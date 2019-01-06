import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

class MainHeader extends Component {
	constructor() {
		super();
		this.state = {
			nav: [
				{
					name: 'Getting Started',
					path: '/docs/start'
				},
				{
					name: 'Github',
					path: 'https://github.com/dkk94/formare'
				}
			]
		}
	}
	
	render() {
		const { nav } = this.state;
		
		return (
			<header className="MainHeader">
				<div className="Navbar Navbar--primary">
					<div className="Container u-Flex u-JustifyContent-between">
						<div id="master-brand" className="Navbar-block">
							<div className="u-PaddingLeft u-PaddingRight">
								<NavLink to="/" className="u-Color-lighter u-FontWeight-semibold u-FontSize-xlarge">Formare</NavLink>
							</div>	
						</div>
						<div id="master-nav" className="Navbar-block Navbar-block--expanded">
							<nav className="Nav">
								<ul className="Nav-list">
									{
										nav.map(item => {
											return (
												<li className={classNames('Nav-item', )}>
													<NavLink className="Nav-link" to={item.path}>{item.name}</NavLink>
												</li>
											)
										})
									}
								</ul>
							</nav>
						</div>
						<div className="Navbar-block Navbar-block--end">
							<nav className="Nav">
								<ul className="Nav-list">
									<li className="Nav-item">
										<button className="Button Button--raised Button--secondary">
											<i className="fas fa-download u-MarginRight"></i>
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

export default MainHeader;