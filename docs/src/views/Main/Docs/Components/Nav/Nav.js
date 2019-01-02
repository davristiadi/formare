import React, { PropTypes } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";

const Nav = props => {
  return (
    <div className="fr-nav-page">
      <article className="fr-DocsArticle">
        <div className="fr-DocsArticle-heading">
          <h2 className="fr-DocsArticle-title">Navigation</h2>
          <h5 className="fr-DocsArticle-subtitle">
            Sint elit sint non et quis sit sint veniam est pariatur.
          </h5>
        </div>
        <div id="overview" className="fr-DocsArticle-section">
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
              {`<nav class="nav">
                <ul class="nav__list">
                  <li class="nav__item">
                    <a class="nav__link">Home</a>
                  </li>
                  <li class="nav__item">
                    <a class="nav__link">About</a>
                  </li>
                  <li class="nav__item">
                    <a class="nav__link">Contact</a>
                  </li>
                </ul>
              </nav>
              `}
            </PreviewHighlight>
          </Preview>
        </div>
      </article>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
