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
          <div className="Heading">
            <h4 className="Title">Overview</h4>
          </div>
          <p>Eu do qui officia ut ea duis cillum ullamco cillum ut.</p>
          <Preview layout="horizontal">
            <PreviewDisplay>
              <nav className="Nav">
                <ul className="Nav-list">
                  <li className="Nav-item">
                    <a className="Nav-link">Home</a>
                  </li>
                  <li className="Nav-item">
                    <a className="Nav-link">About</a>
                  </li>
                  <li className="Nav-item">
                    <a className="Nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </PreviewDisplay>
            <PreviewHighlight lang="html">
              {`<nav class="Nav">
                <ul class="Nav-list">
                  <li class="Nav-item">
                    <a class="Nav-link">Home</a>
                  </li>
                  <li class="Nav-item">
                    <a class="Nav-link">About</a>
                  </li>
                  <li class="Nav-item">
                    <a class="Nav-link">Contact</a>
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
