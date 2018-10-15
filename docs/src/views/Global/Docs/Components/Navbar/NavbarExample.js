import React from 'react'
import classNames from 'classnames';

const NavbarExample = props => {
    const {
        theme,
        className,
        ...attributes
    } = props;

    attributes.className = classNames(
        `navbar`,
        theme ? `navbar--${theme}` : null,
        className
    )
    
    return (
        <div className={attributes.className}>
            <div className="navbar__container navbar__container--full-width">
                <div className="navbar__block">
                    <h5 className="fw-semibold">Formare</h5>
                </div>
                <div className="navbar__block navbar__block--end">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item"><a className="nav__link">Home</a></li>
                            <li className="nav__item"><a className="nav__link">Documentation</a></li>
                            <li className="nav__item"><a className="nav__link">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

NavbarExample.propTypes = {
    
}

export default NavbarExample