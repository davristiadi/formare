import React, { PureComponent } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";
import "./Structure.scss";

class Structure extends PureComponent {
  render() {
    return (
      <div id="structure">
        <article className="fr-DocsArticle">
          <div className="fr-DocsArticle-heading">
            <h2 className="fr-DocsArticle-title">Structure</h2>
            <h5 className="fr-DocsArticle-subtitle">
              Defines the main structure layout of your website easily.
            </h5>
          </div>
          <section id="overview" className="fr-DocsArticle-section">
            <div className="Heading">
              <h4 className="Title">Overview</h4>
            </div>
            <p>
              Qui sunt voluptate fugiat duis quis labore anim pariatur tempor
              aliquip labore pariatur. Dolor non cillum dolore est ad est.
              Tempor reprehenderit ex consequat occaecat commodo dolore duis.
            </p>
            <ul>
              <li>
                <code>Structure</code>: Voluptate deserunt aliqua enim proident.
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
          <section id="basic" className="fr-DocsArticle-section">
            <div className="Heading">
              <h4 className="Title">Types</h4>
            </div>
            <p>
              Aute veniam aliqua laborum nulla dolore nulla. Consectetur
              consectetur et ea enim in. Irure magna laborum dolore ullamco
              culpa ipsum cillum ex dolor qui deserunt.
            </p>
            <div className="fr-Structure-showcase">
              <div className="Structure">
                <header className="Header">
                  <span>Header</span>
                </header>
                <div className="Content">
                  <span>Content</span>
                </div>
                <footer className="Footer">
                  <span>Footer</span>
                </footer>
              </div>
            </div>
            <div className="fr-Structure-showcase">
              <div className="Structure">
                <header className="Header">
                  <span>Header</span>
                </header>
                <div className="Structure Structure--horizontal">
                  <aside className="Aside">Sidebar</aside>
                  <div className="Content">Content</div>
                </div>
                <footer className="Footer">Footer</footer>
              </div>
            </div>
            <div className="fr-Structure-showcase">
              <div className="Structure Structure--horizontal">
                <aside className="Aside">
                  <span>Sidebar</span>
                </aside>
                <div className="Structure">
                  <header className="Header">Header</header>
                  <div className="Content">Content</div>
                  <footer className="Footer">Footer</footer>
                </div>
              </div>
            </div>
          </section>
          <section id="examples" className="fr-DocsArticle-section">
            <div className="Heading">
              <h4 className="Title">Examples</h4>
            </div>
            <Preview>
              <PreviewDisplay gapless borderless>                
                <div className="fr-Structure-example">
                  <div className="Structure">
                    <header className="Header">
                      <div className="Navbar Navbar--primary">
                        <div className="Container u-Flex u-JustifyContent-between">
                          <div className="Navbar-block">
                            <span id="logo">Logo</span>
                          </div>
                          <div className="Navbar-block">
                            <nav className="Nav">
                              <ul className="Nav-list">
                                <li className="Nav-item">
                                  <a href="/" className="Nav-link">Home</a>
                                </li>
                                <li className="Nav-item">
                                  <a href="/" className="Nav-link">About Us</a>
                                </li>
                                <li className="Nav-item">
                                  <a href="/" className="Nav-link">Contact</a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className="Content">
                      <div className="Content-box">
                        <h5 className="Title">Title</h5>
                        <h6 className="subtitle color-gray">
                          This is a subtitle.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </PreviewDisplay>
              <PreviewHighlight lang="html">
                {`<div className="Structure">
                  <header className="Header">
                    <div className="Navbar">
                      <div className="Navbar-block">
                        <span id="logo"></span>
                      </div>
                    </div>
                  </header>
                  
                  <div className="Content">
                  </div>

                  <div className="Footer">
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
