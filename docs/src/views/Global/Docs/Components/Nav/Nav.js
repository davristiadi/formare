import React, { PropTypes } from 'react'

const Nav = props => {
    return (
        <div id="nav">
            <article className="fr-article article">
                <div className="fr-heading heading">
                    <h3 className="title">Nav</h3>
                    <h5 className="subtitle color-gray">
                        Eu ad commodo adipisicing occaecat sunt ex cupidatat amet quis voluptate nulla ex veniam. 
                        Dolor voluptate do quis in esse exercitation anim sunt fugiat in. Aute amet nisi velit 
                        quis qui duis Lorem consectetur ullamco labore reprehenderit deserunt eu.
                    </h5>
                </div>
                <section className="section">
                    <div className="heading">
                        <h4 className="title">Default Nav</h4>
                        <h6 className="subtitle color-gray">Dolor mollit officia amet do minim ut adipisicing.</h6>
                    </div>
                    <div className="fr-preview">
                        <span className="fr-preview__tag">Preview</span>
                        <div className="fr-preview__display">
                            <nav className="nav">
                                <ul className="nav__list">
                                    <li className="nav__item">
                                        <a className="nav__link">Home</a>
                                    </li>
                                    <li className="nav__item">
                                        <a className="nav__link">Documentation</a>
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
                </section>
                <hr />
                <section className="section">
                    <div className="heading">
                        <h4 className="title">Navigation inside Navbar</h4>
                        <h6 className="subtitle">Consequat Lorem id labore ad consectetur Lorem voluptate proident.</h6>
                    </div>
                    <div className="fr-preview">
                        <span className="fr-preview__tag">Preview</span>
                        <div className="fr-preview__display">
                            <div className="navbar navbar--primary">
                                <div className="navbar__container navbar__container--full-width">
                                    <div className="navbar__block navbar__block--end">
                                        <nav className="nav">
                                            <ul className="nav__list">
                                                <li className="nav__item">
                                                    <a className="nav__link">Home</a>
                                                </li>
                                                <li className="nav__item">
                                                    <a className="nav__link">Documentation</a>
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
                        </div>
                    </div>
                </section>
                <hr />
                <section className="section">
                    <div className="heading">
                        <h4 className="title">Tabbed Navigation</h4>
                        <h6 className="subtitle color-gray">Ullamco aute et id eu elit esse voluptate elit incididunt ad elit.</h6>
                    </div>
                    <div className="fr-preview">
                        <span className="fr-preview__tag">Preview</span>
                        <div className="fr-preview__display">
                            <div className="mg-bottom">
                                <nav className="nav nav--tabs">
                                    <ul className="nav__list">
                                        <li className="nav__item nav__item--active">
                                            <a className="nav__link">Home</a>
                                        </li>
                                        <li className="nav__item">
                                            <a className="nav__link">Documentation</a>
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
                            <div>
                                <nav className="nav nav--tabs nav--primary">
                                    <ul className="nav__list nav__list--active">
                                        <li className="nav__item nav__item--active">
                                            <a className="nav__link">Home</a>
                                        </li>
                                        <li className="nav__item">
                                            <a className="nav__link">Documentation</a>
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
                </section>
            </article>
        </div>
    )
}

Nav.propTypes = {
    
}

export default Nav