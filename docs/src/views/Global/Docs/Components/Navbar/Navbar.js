import React from 'react'
import NavbarExample from './NavbarExample';
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';

const Navbar = props => {
    return (
        <div className="fr-navbar-page">
            <article className="fr-article">
                <div className="fr-heading heading">
                    <h2 className="title">Navigation Bar</h2>
                    <h4 className="subtitle color-gray">Consectetur non Lorem mollit incididunt nostrud qui. Tempor ea enim qui in id mollit anim consectetur id sit aute id proident. Tempor Lorem ea dolor cupidatat nulla commodo amet.</h4>
                </div>
                <section id="overview">
                    <Preview>
                        <PreviewDisplay>
                            <NavbarExample />                            
                        </PreviewDisplay>
                        <PreviewHighlight lang="html">
                            {`<div class="navbar">
                                <div class="navbar__container navbar__container--full-width">
                                    <div class="navbar__block">
                                        <h5>Logo</h5>
                                    </div>
                                    <div class="navbar__block navbar__block--end">
                                        <nav class="nav">
                                            <ul class="nav__list">
                                                <li class="nav__item"><a class="nav__link">Home</a></li>
                                                <li class="nav__item"><a class="nav__link">Documentation</a></li>
                                                <li class="nav__item"><a class="nav__link">FAQ</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            `}
                        </PreviewHighlight>
                    </Preview>
                </section>
                <section id="themes">
                    <Preview>
                        <PreviewDisplay>
                            <NavbarExample theme="primary" className="mg-bottom-x-large" />
                            <NavbarExample theme="secondary" className="mg-bottom-x-large" />
                            <NavbarExample theme="warning" className="mg-bottom-x-large" />
                            <NavbarExample theme="danger" className="mg-bottom-x-large" />
                            <NavbarExample theme="lighter" className="mg-bottom-x-large" />
                            <NavbarExample theme="light" className="mg-bottom-x-large" />
                            <NavbarExample theme="dark" className="mg-bottom-x-large" />
                            <NavbarExample theme="darker" className="mg-bottom-x-large" />
                        </PreviewDisplay>
                    </Preview>
                </section>
                <section id="sizes">
                    <Preview>
                        <PreviewDisplay>
                            <NavbarExample theme="primary" size="small" className="mg-bottom-x-large" />
                            <NavbarExample theme="primary" className="mg-bottom-x-large" />
                            <NavbarExample theme="primary" size="large" />
                        </PreviewDisplay>
                    </Preview>
                </section>
            </article>
        </div>
    )
}

Navbar.propTypes = {
    
}

export default Navbar