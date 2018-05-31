import React, { PropTypes } from 'react'

const Nav = props => {
    return (
        <div id="nav">
            <article class="fr-article article">
                <div class="fr-heading heading">
                    <h3 class="title">Nav</h3>
                    <h5 class="subtitle color-gray">Do duis dolore duis aliquip voluptate sit non occaecat nulla adipisicing amet.</h5>
                </div>
                <section class="section">
                    <div class="heading">
                        <h4 class="title">Default Nav</h4>
                        <h6 class="subtitle color-gray">Dolor mollit officia amet do minim ut adipisicing.</h6>
                    </div>
                    <div class="fr-preview">
                        <span class="fr-preview__tag">Preview</span>
                        <div class="fr-preview__display">
                            <nav class="nav">
                                <ul class="nav__list">
                                    <li class="nav__item">
                                        <a class="nav__link">Home</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link">Documentation</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link">FAQ</a>
                                    </li>
                                    <li class="nav__item">
                                        <a class="nav__link">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <hr />
                <section class="section">
                    <div class="heading">
                        <h4 class="title">Tabbed Nav</h4>
                        <h6 class="subtitle color-gray">Ullamco aute et id eu elit esse voluptate elit incididunt ad elit.</h6>
                    </div>
                    <div class="fr-preview">
                        <span class="fr-preview__tag">Preview</span>
                        <div class="fr-preview__display">
                            <div class="mg-bottom">
                                <nav class="nav nav--tabs">
                                    <ul class="nav__list">
                                        <li class="nav__item nav__item--active">
                                            <a class="nav__link">Home</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">Documentation</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">FAQ</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div>
                                <nav class="nav nav--tabs nav--primary">
                                    <ul class="nav__list">
                                        <li class="nav__item nav__item--active">
                                            <a class="nav__link">Home</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">Documentation</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">FAQ</a>
                                        </li>
                                        <li class="nav__item">
                                            <a class="nav__link">Contact Us</a>
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