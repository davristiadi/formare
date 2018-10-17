import React from 'react';
import { Preview, PreviewHighlight, PreviewDisplay } from 'components/Preview';
import { Highlight } from 'components/Highlight';

const Button = props => {
    return (
        <div id="button">
            <article className="fr-article article">
                <div className="fr-heading heading">
                    <h2 className="title">Buttons</h2>
                </div>
                <article id="overview" className="fr-section">
                    <header className="heading">
                        <h4 className="title">Overview</h4>
                    </header>
                    <p>Minim culpa do anim laboris minim ex. Eiusmod deserunt veniam do labore veniam labore voluptate Lorem eu labore.</p>
                    <div className="mg-bottom-large">
                        <button className="button mg-right">Default Button</button>
                        <button className="button button--primary">Primary Button</button>
                    </div>
                    <Highlight lang="html">
                        {`<button className="button mg-right">Default Button</button>
                        <button className="button button--primary">Primary Button</button>
                        `}
                    </Highlight>
                </article>
                <article id="themes" className="fr-section">
                    <div className="heading">
                        <h4 className="title">Themes</h4>
                    </div>
                    <p>Fugiat est pariatur velit ipsum nisi dolor proident amet culpa duis fugiat ullamco dolore. Ipsum occaecat anim ipsum officia irure proident quis occaecat amet consequat.</p>
                    <Preview>
                        <PreviewDisplay>
                            <div className="mg-bottom">
                                <button className="button mg-right">Default</button>
                                <button className="button button--primary mg-right">Primary</button>
                                <button className="button button--secondary mg-right">Secondary</button>
                                <button className="button button--success mg-right">Success</button>
                                <button className="button button--danger mg-right">Danger</button>
                                <button className="button button--warning mg-right">Warning</button>
                            </div>
                            <div>
                                <button className="button button--dark mg-right">Dark</button>
                                <button className="button button--light">Light</button>
                            </div>
                        </PreviewDisplay>
                        <PreviewHighlight lang="html">
                            {`<button class="button">Default</button>
                            <button class="button button--primary">Primary</button>
                            <button class="button button--secondary">Secondary</button>
                            <button class="button button--success">Success</button>
                            <button class="button button--danger">Danger</button>
                            <button class="button button--warning">Warning</button>
                            <button class="button button--dark">Dark</button>
                            <button class="button button--light">Light</button>
                            <button class="button button--dark mg-right">Dark</button>
                            <button class="button button--light">Light</button>
                            `}
                        </PreviewHighlight>
                    </Preview>
                </article>
                

                <div className="mg-bottom-x-large">
                    <div className="heading">
                        <h5 className="title">Raised</h5>
                        <h6 className="subtitle color-gray">Id dolore aute cillum velit laboris irure laborum elit irure occaecat magna minim.</h6>
                    </div>
                    <Preview>
                        <PreviewDisplay>
                            <div className="mg-bottom">
                                <button className="button button--raised mg-right">Button</button>
                                <button className="button button--primary button--raised mg-right">Primary</button>
                                <button className="button button--secondary button--raised mg-right">Secondary</button>
                                <button className="button button--success button--raised mg-right">Success</button>
                                <button className="button button--danger button--raised mg-right">Danger</button>
                                <button className="button button--warning button--raised mg-right">Warning</button>
                            </div>
                            <div>
                                <button className="button button--dark button--raised mg-right">Dark</button>
                                <button className="button button--light button--raised">Light</button>
                            </div>
                        </PreviewDisplay>
                        <PreviewHighlight lang="html">
                            {`<button class="button button--raised">Button</button>
                            <button class="button button--primary button--raised">Primary</button>
                            <button class="button button--secondary button--raised">Secondary</button>
                            <button class="button button--success button--raised">Success</button>
                            <button class="button button--danger button--raised">Danger</button>
                            <button class="button button--warning button--raised">Warning</button>
                            <button class="button button--dark button--raised">Dark</button>
                            <button class="button button--light button--raised">Light</button>
                            `}
                        </PreviewHighlight>
                    </Preview>
                </div>

                <div className="mg-bottom-x-large">
                    <div className="heading">
                        <h5 className="title">Rounded</h5>
                        <h6 className="subtitle color-gray">
                            Need a button with a circular sides (similar to that of a pill shape-wise)?{" "}
                            Use <code>{`.button--pill`}</code> modifier class for that!
                        </h6>
                    </div>
                    <Preview>
                        <PreviewDisplay>
                            <button className="button button--pill mg-right">Rounded Button</button>
                        </PreviewDisplay>
                        <PreviewHighlight lang="html">
                            {`<button class="button button--pill">Rounded Button</button>
                            `}
                        </PreviewHighlight>
                    </Preview>
                </div>

                <div>
                    <div className="heading">
                        <h4 className="title">Sizes</h4>
                    </div>
                    <p>
                        Need your button bigger, or rather smaller? Append <code>{`.button--#{size}`}</code> modifier class
                        to customize the size of a button component as needed.
                    </p>
                    <p>
                        We've prepared several predefined sizes that you can use right out-of-the-box:
                        <ul>
                            <li><code>{`.button--x-small`}</code></li>
                            <li><code>{`.button--small`}</code></li>
                            <li><code>{`.button--large`}</code></li>
                            <li><code>{`.button--x-large`}</code></li>
                        </ul>
                    </p>
                    <Preview>
                        <PreviewDisplay>
                            <button className="button button--x-small mg-right">Extra Small</button>
                            <button className="button button--small mg-right">Small</button>
                            <button className="button mg-right">Base</button>
                            <button className="button button--large mg-right">Large</button>
                            <button className="button button--x-large">Extra Large</button>
                        </PreviewDisplay>
                        <PreviewHighlight lang="html">
                            {`<button class="button button--x-small">Extra Small</button>
                            <button class="button button--small">Small</button>
                            <button class="button">Base</button>
                            <button class="button button--large">Large</button> 
                            <button class="button button--x-large">Extra Large</button>
                            `}
                        </PreviewHighlight>
                    </Preview>
                </div>
            </article>
        </div>
    );
};

Button.propTypes = {

};

export default Button;