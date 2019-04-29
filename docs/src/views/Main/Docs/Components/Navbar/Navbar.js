import React from 'react';
import NavbarExample from './NavbarExample';
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';
import './Navbar.scss';

const Navbar = props => {
  return (
    <article id="navbar-docs" className="DocsArticle">
      <div className="DocsArticle-heading">
        <h2 className="DocsArticle-title">Navigation Bar</h2>
        <h5 className="DocsArticle-subtitle">
          Navbar is the a container component you could use to contain branding,
          main navigation and so on.
        </h5>
      </div>
      <section id="overview" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Overview</h4>
        </div>
        <p>
          Voluptate Lorem fugiat in laborum ex occaecat sit. Qui aliquip aute
          sint proident.
        </p>
        <Preview>
          <PreviewDisplay gapless>
            <div className="NavbarExample">
              <div className="Navbar">
                <div className="Navbar-block">
                  <span className="NavbarExample__logo">Logo</span>
                </div>
                <div className="Navbar-block Navbar-block--expanded">
                  <nav className="Nav">
                    <ul className="Nav-list">
                      <li className="Nav-item">
                        <a className="Nav-link">Home</a>
                      </li>
                      <li className="Nav-item">
                        <a className="Nav-link">FAQ</a>
                      </li>
                      <li className="Nav-item">
                        <a className="Nav-link">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="Navbar-block">
                  <nav className="Nav">
                    <ul className="Nav-list">
                      <li className="Nav-item">
                        <button className="Button Button--primary">
                          Sign up
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="Navbar">
                <div className="Navbar-block">
                  <span>Logo</span>
                </div>
                <div className="Navbar-block Navbar-block--expanded">
                  <nav className="Nav">
                    <ul className="Nav-list">
                      <li className="Nav-item">
                        <a className="Nav-link">Home</a>
                      </li>
                      <li className="Nav-item">
                        <a className="Nav-link">FAQ</a>
                      </li>
                      <li className="Nav-item">
                        <a className="Nav-link">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="Navbar-block">
                  <nav className="Nav">
                    <ul className="Nav-list">
                      <li className="Nav-item">
                        <button className="Button Button--primary">Sign up</button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="themes" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Themes</h4>
        </div>
        <p>
          <span>
            Like other components, navbar can also be customizable with our
            out-of-the-box theme set. Append the{' '}
            <code>{`navbar--#{theme}`}</code> alongside the{' '}
            <code>{`navbar`}</code> class in order to change its theme.
          </span>
        </p>
        <ul>
          <li>
            <code>{`navbar--primary`}</code>
          </li>
          <li>
            <code>{`navbar--secondary`}</code>
          </li>
          <li>
            <code>{`navbar--success`}</code>
          </li>
          <li>
            <code>{`navbar--warning`}</code>
          </li>
          <li>
            <code>{`navbar--danger`}</code>
          </li>
          <li>
            <code>{`navbar--light`}</code>
          </li>
          <li>
            <code>{`navbar--dark`}</code>
          </li>
        </ul>
        <Preview>
          <PreviewDisplay>
            <NavbarExample theme="primary" />
            <NavbarExample theme="secondary" />
            <NavbarExample theme="success" />
            <NavbarExample theme="danger" />
            <NavbarExample theme="warning" />
            <NavbarExample theme="lighter" />
            <NavbarExample theme="light" />
            <NavbarExample theme="dark" />
            <NavbarExample theme="darker" />
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div class="Navbar Navbar--primary">
              <!-- navbar blocks here... -->
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="blocks" className="DocsArticle-section">
        <div className="Heading">
          <h4 className="Title">Navbar Block</h4>
        </div>
        <p>
          In Formare, a navbar layout is often accompanied with its block-level
          component called the <strong>navbar block.</strong>
        </p>
      </section>
    </article>
  );
};

Navbar.propTypes = {};

export default Navbar;
