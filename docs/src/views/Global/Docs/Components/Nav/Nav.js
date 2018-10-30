import React, { PropTypes } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";

const Nav = props => {
  return (
    <div className="fr-nav">
      <article className="fr-article">
        <div className="fr-article-heading">
          <h2 className="fr-article-title">Navigation</h2>
          <h5 className="fr-article-subtitle">
            Sint elit sint non et quis sit sint veniam est pariatur.
          </h5>
        </div>
        <div id="overview" className="fr-article-section">
          <div className="heading">
            <h4 className="title">Overview</h4>
          </div>
          <p>Eu do qui officia ut ea duis cillum ullamco cillum ut.</p>
          <Preview>
            <PreviewDisplay>
              <nav className="nav">
                <ul className="nav__list">
                  <li className="nav__item">
                    <a className="nav__link">Home</a>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link">About</a>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link">Contact</a>
                  </li>
                </ul>
              </nav>
            </PreviewDisplay>
            <PreviewHighlight lang="html">
              {`<nav className="nav">
                <ul className="nav__list">
                  <li className="nav__item">
                    <a className="nav__link">Home</a>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link">About</a>
                  </li>
                  <li className="nav__item">
                    <a className="nav__link">Contact</a>
                  </li>
                </ul>
              </nav>
              `}
            </PreviewHighlight>
          </Preview>
        </div>

        {/* <section className="section mg-bottom-x-large">
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
                <section className="section mg-bottom-x-large">
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
                <section className="section mg-bottom-x-large">
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
                </section> */}
      </article>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
