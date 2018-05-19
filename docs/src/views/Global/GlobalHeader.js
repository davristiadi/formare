import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GlobalHeader extends Component {
    render() {
        return (
            <header id="global-header" className="fr-global-header">
                <div className="navbar navbar--primary">
                    <div className="navbar__container">
                        <div className="navbar__block flex jc-start">
                            <h5 className="font fw-bold fs-x-large">
                            	<Link to="/" className="nav__link">Formare</Link>
                            </h5>
                        </div>
                        <div className="navbar__block flex jc-end">
                            <nav className="nav">
                                <ul className="nav__list">
                                    <li className="nav__item">
                                        <Link to="/docs" className="nav__link">Documentation</Link>
                                    </li>
                                    <li className="nav__item">
                                    	<Link to="/help" className="nav__link">Getting Started</Link>
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