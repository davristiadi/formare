import React from 'react'
import NavbarExample from './NavbarExample';
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';
import './Navbar.scss';

const Navbar = props => {
  return (
    <article id="navbar-page" className="fr-article">
      <div className="fr-article-heading">
        <h2 className="fr-article-title">Navigation Bar</h2>
        <h5 className="fr-article-subtitle">Sint ex nisi in adipisicing esse esse do ad deserunt labore consectetur cupidatat reprehenderit.</h5>
      </div>
      <section id="overview" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Overview</h4>
        </div>
        <p>Voluptate Lorem fugiat in laborum ex occaecat sit. Qui aliquip aute sint proident.</p>
        <Preview>
          <PreviewDisplay>
            <div className="fr-navbar-example">
              <div className="navbar">
                <div className="navbar__block">
                  <span id="logo">Logo</span>
                </div>
                <div className="navbar__block">
                  <nav className="nav">
                    <ul className="nav__list">
                      <li className="nav__item">
                        <a className="nav__link">Home</a>
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
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<div className="navbar">
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
                      <a className="nav__link">FAQ</a>
                    </li>
                    <li className="nav__item">
                      <a className="nav__link">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="themes" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Themes</h4>
        </div>
        <p>
          <span>
            Like other components, navbar can also be customizable with our out-of-the-box theme set. 
            Append the <code>{`navbar--#{theme}`}</code> alongside the <code>{`navbar`}</code> class in order to change its theme.
          </span>
        </p>
        <ul>
          <li><code>{`navbar--primary`}</code></li>
          <li><code>{`navbar--secondary`}</code></li>
          <li><code>{`navbar--success`}</code></li>
          <li><code>{`navbar--warning`}</code></li>
          <li><code>{`navbar--danger`}</code></li>
          <li><code>{`navbar--light`}</code></li>
          <li><code>{`navbar--dark`}</code></li>
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
            {`<div class="navbar navbar--primary">
              <!-- navbar blocks here... -->
            </div>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      <section id="blocks" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Navbar Block</h4>
        </div>
        <p>Navbar block is the d</p>
      </section>

    </article>
  )

  // return (
  //     <div className="fr-navbar-page">
  //         <article className="fr-article">
  //             <div className="fr-heading heading">
  //                 <h2 className="title">Navigation Bar</h2>
  //             </div>
  //             <section id="overview">
  //                 <Preview>
  //                     <PreviewDisplay>
  //                         <NavbarExample />                            
  //                     </PreviewDisplay>
  //                     <PreviewHighlight lang="html">
  //                         {`<div class="navbar">
  //                             <div class="navbar__container navbar__container--full-width">
  //                                 <div class="navbar__block">
  //                                     <h5>Logo</h5>
  //                                 </div>
  //                                 <div class="navbar__block navbar__block--end">
  //                                     <nav class="nav">
  //                                         <ul class="nav__list">
  //                                             <li class="nav__item"><a class="nav__link">Home</a></li>
  //                                             <li class="nav__item"><a class="nav__link">Documentation</a></li>
  //                                             <li class="nav__item"><a class="nav__link">FAQ</a></li>
  //                                         </ul>
  //                                     </nav>
  //                                 </div>
  //                             </div>
  //                         </div>
  //                         `}
  //                     </PreviewHighlight>
  //                 </Preview>
  //             </section>
  //             <section id="themes">
  //                 <Preview>
  //                     <PreviewDisplay>
  //                         <NavbarExample theme="primary" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="secondary" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="warning" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="danger" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="lighter" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="light" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="dark" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="darker" className="mg-bottom-x-large" />
  //                     </PreviewDisplay>
  //                 </Preview>
  //             </section>
  //             <section id="sizes">
  //                 <Preview>
  //                     <PreviewDisplay>
  //                         <NavbarExample theme="primary" size="small" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="primary" className="mg-bottom-x-large" />
  //                         <NavbarExample theme="primary" size="large" />
  //                     </PreviewDisplay>
  //                 </Preview>
  //             </section>
  //         </article>
  //     </div>
  // )
}

Navbar.propTypes = {

}

export default Navbar