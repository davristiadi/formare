import React, { Component } from 'react';

class GlobalHeader extends Component {
    render() {
        return (
            <header id="global-header" className="fr-global-header">
                <div className="navbar navbar--primary">
                    <div className="navbar__container">
                        <div className="navbar__block flex jc-start">
                            <h5 className="font font--bold font--x-large">Formare</h5>
                        </div>
                        <div className="navbar__block flex jc-end">
                            <nav className="nav">
                                <ul className="nav__list">
                                    <li className="nav__item">
                                        <a className="nav__link">Documentation</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link">Help</a>
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