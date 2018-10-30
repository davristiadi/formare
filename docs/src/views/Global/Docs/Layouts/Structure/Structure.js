import React, { PureComponent } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
import "./Structure.scss";

class Structure extends PureComponent {
  render() {
    return (
      <div id="structure">
        <article className="fr-article">
          <div className="fr-article-heading">
            <h2 className="fr-article-title">Structure</h2>
            <h5 className="fr-article-subtitle">
              Formare's structure system handles the foundation of a page
              layout.
            </h5>
          </div>
          <section id="overview" className="fr-article-section">
            <div className="heading">
              <h4 className="title">Overview</h4>
            </div>
            <p>
              Qui sunt voluptate fugiat duis quis labore anim pariatur tempor
              aliquip labore pariatur. Dolor non cillum dolore est ad est.
              Tempor reprehenderit ex consequat occaecat commodo dolore duis.
            </p>
            {/* <p>Ea irure aliqua non duis laboris sunt tempor qui veniam irure officia enim irure fugiat. In veniam laboris tempor et proident incididunt officia.</p>
            <p>Id voluptate est commodo adipisicing id irure sint aliquip enim Lorem ullamco magna.</p> */}
            <ul>
              <li>
                <code>Structure</code>: Voluptate deserunt aliqua enim
                proident..
              </li>
              <li>
                <code>Header</code>: Commodo reprehenderit cillum esse minim.
              </li>
              <li>
                <code>Content</code>: Occaecat magna labore occaecat ullamco
                tempor aliqua qui commodo fugiat duis proident in laborum amet.
              </li>
              <li>
                <code>Sidebar</code>: Aliquip cillum non laborum ipsum. Nisi
                Lorem dolor ullamco laborum tempor exercitation proident.
              </li>
              <li>
                <code>Footer</code>: Eu magna qui et ut commodo nisi commodo ut
                adipisicing.
              </li>
            </ul>
          </section>
          <section id="basic" className="fr-article-section">
            <div className="heading">
              <h4 className="title">Types</h4>
            </div>
            <p>
              Aute veniam aliqua laborum nulla dolore nulla. Consectetur
              consectetur et ea enim in. Irure magna laborum dolore ullamco
              culpa ipsum cillum ex dolor qui deserunt.
            </p>
            <div className="fr-structure-showcase">
              <div className="structure">
                <header className="header">
                  <span>Header</span>
                </header>
                <div className="content">
                  <span>Content</span>
                </div>
                <footer className="footer">
                  <span>Footer</span>
                </footer>
              </div>
            </div>
            <div className="fr-structure-showcase">
              <div className="structure">
                <header className="header">
                  <span>Header</span>
                </header>
                <div className="structure structure--horizontal">
                  <aside className="aside">Sidebar</aside>
                  <div className="content">Content</div>
                </div>
                <footer className="footer">Footer</footer>
              </div>
            </div>
            <div className="fr-structure-showcase">
              <div className="structure structure--horizontal">
                <aside className="aside">
                  <span>Sidebar</span>
                </aside>
                <div className="structure">
                  <header className="header">Header</header>
                  <div className="content">Content</div>
                  <footer className="footer">Footer</footer>
                </div>
              </div>
            </div>
          </section>
          <section id="examples" className="fr-article-section">
            <div className="heading">
              <h4 className="title">Examples</h4>
            </div>
            <Preview>
              <PreviewDisplay>
                <div className="fr-structure-example">
                  <div className="structure">
                    <header className="header">
                      <div className="navbar navbar--primary">
                        <div className="navbar__container navbar__container--full-width">
                          <div className="navbar__block">
                            <span id="logo">Logo</span>
                          </div>
                          <div className="navbar__block navbar__block--end">
                            <nav className="nav">
                              <ul className="nav__list">
                                <li className="nav__item">
                                  <a className="nav__link">Home</a>
                                </li>
                                <li className="nav__item">
                                  <a className="nav__link">Contact Us</a>
                                </li>
                              </ul>
                            </nav>
                            {/* <nav className="nav">
                              <ul className="nav__list">
                                <li className="nav__item"><a className="nav__link">Home</a></li>
                                <li className="nav__item"><a className="nav__link">FAQ</a></li>
                                <li className="nav__item"><a className="nav__link">Contact Us</a></li>
                              </ul>
                            </nav> */}
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className="content">
                      <div className="content__box">
                        <h5 className="title">Title</h5>
                        <h6 className="subtitle color-gray">
                          This is a subtitle.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </PreviewDisplay>
              <PreviewHighlight lang="html">
                {`<div className="structure">
                  <header className="header">
                    <div className="navbar">
                      <div className="navbar__block">
                        <span id="logo"></span>
                      </div>
                      <div className="navbar__block navbar__block--end">
                        <nav className="nav">
                          <ul className="nav__list">
                            <li className="nav__item">Home</li>
                            <li className="nav__item">FAQ</li>
                            <li className="nav__item">Contact Us</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </header>
                  
                  <div className="content">
                  </div>

                  <div className="footer">
                  </div>
                </div>
                `}
              </PreviewHighlight>
            </Preview>
          </section>
        </article>
      </div>
    );
  }
}

Structure.propTypes = {};

export default Structure;
