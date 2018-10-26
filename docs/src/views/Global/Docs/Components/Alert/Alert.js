import React from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const Alert = props => {
    return (
        <article id="alerts" className="fr-article">
            <header className="fr-article-heading">
                <h2 className="fr-article-title">Alerts</h2>
                <h5 className="fr-article-subtitle">The easiest way to show non-interuptible feedback content with lots of customizations.</h5>
            </header>
            <section id="overview" className="fr-article-section">
                <div className="heading">
                    <h4 className="title">Overview</h4>
                </div>
                <p>In veniam labore do eiusmod fugiat. Occaecat pariatur sit laboris id est nisi eiusmod do officia adipisicing qui. Cillum ea adipisicing duis enim dolor deserunt ipsum eu ullamco elit ut minim.</p>
                <p>Eu cillum dolore ut Lorem excepteur est pariatur. Consequat aliqua velit ipsum nostrud nostrud elit in reprehenderit id ea. Nisi adipisicing mollit labore eiusmod amet. Aute fugiat nisi duis sit fugiat.</p>
                <Preview>
                    <PreviewDisplay>
                        <div className="alert">
                            <div className="alert__body">This is an example alert.</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div className="alert">
                            <div className="alert__body">This is an example alert.</div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>
            </section>
            <section id="themes" className="fr-article-section">
                <header className="heading">
                    <h4 className="title">Themes</h4>
                </header>
                <p>Deserunt irure veniam irure pariatur quis. Duis magna deserunt sit eiusmod nisi consequat cillum irure eiusmod. Nisi cupidatat sunt adipisicing officia qui voluptate.</p>
                <ul>
                    <li><code>{`.alert--primary`}</code></li>
                    <li><code>{`.alert--secondary`}</code></li>
                    <li><code>{`.alert--success`}</code></li>
                    <li><code>{`.alert--danger`}</code></li>
                    <li><code>{`.alert--warning`}</code></li>
                    <li><code>{`.alert--light`}</code></li>
                    <li><code>{`.alert--dark`}</code></li>
                </ul>
                <Preview>
                    <PreviewDisplay>
                        <div className="alert alert--primary mg-bottom">
                            <div className="alert__body">This is an alert with primary theme!</div>
                        </div>
                        <div className="alert alert--secondary mg-bottom">
                            <div className="alert__body">This is an alert with secondary theme!</div>
                        </div>
                        <div className="alert alert--success mg-bottom">
                            <div className="alert__body">This is an alert with success theme!</div>
                        </div>
                        <div className="alert alert--warning mg-bottom">
                            <div className="alert__body">This is an alert with warning theme!</div>
                        </div>
                        <div className="alert alert--danger mg-bottom">
                            <div className="alert__body">This is an alert with danger theme!</div>
                        </div>
                        <div className="alert alert--light mg-bottom">
                            <div className="alert__body">This is an alert with light theme!</div>
                        </div>
                        <div className="alert alert--dark">
                            <div className="alert__body">This is an alert with dark theme!</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div class="alert alert--primary mg-bottom">
                            <div class="alert__body">This is an alert with primary theme!</div>
                        </div>
                        <div class="alert alert--secondary mg-bottom">
                            <div class="alert__body">This is an alert with secondary theme!</div>
                        </div>
                        <div class="alert alert--success mg-bottom">
                            <div class="alert__body">This is an alert with success theme!</div>
                        </div>
                        <div class="alert alert--warning mg-bottom">
                            <div class="alert__body">This is an alert with warning theme!</div>
                        </div>
                        <div class="alert alert--danger mg-bottom">
                            <div class="alert__body">This is an alert with danger theme!</div>
                        </div>
                        <div class="alert alert--light mg-bottom">
                            <div class="alert__body">This is an alert with light theme!</div>
                        </div>
                        <div class="alert alert--dark">
                            <div class="alert__body">This is an alert with dark theme!</div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>
            </section>
            <section id="extras" className="fr-article-section">
                <header className="heading">
                    <h4 className="title">Icons</h4>
                </header>
                <p>Fugiat sit exercitation id aute dolore do officia. Aliqua non sint elit laborum labore occaecat ea Lorem duis velit sint cupidatat veniam dolor.</p>
                <Preview>
                    <PreviewDisplay>
                        <div className="alert alert--warning mg-bottom">
                            <div className="alert__icon">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <span>This is an alert with an icon</span>
                            {/* <div className="alert__body">This is an alert with an icon!</div> */}
                        </div>
                        <div className="alert alert--success mg-bottom">
                            <div className="alert__icon">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="alert__body">This is an alert with an icon!</div>
                        </div>
                        <div className="alert alert--primary">
                            <div className="alert__icon">
                                <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <div className="alert__body">This is an alert with an icon!</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div class="alert alert--warning">
                            <div class="alert__extra">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="alert__body">This is an alert with an icon!</div>
                        </div>
                        <div class="alert alert--success">
                            <div class="alert__extra">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="alert__body">This is an alert with an icon!</div>
                        </div>
                        <div class="alert alert--primary">
                            <div class="alert__extra">
                                <i class="fas fa-exclamation-circle"></i>
                            </div>
                            <div class="alert__body">This is an alert with an icon!</div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>

            </section>

            {/* <section className="section mg-bottom-x-large">
                <Preview>
                    <PreviewDisplay>
                        <div className="alert alert--primary mg-bottom">
                            <div className="alert__message">This is a primary alert!</div>
                        </div>
                        <div className="alert alert--secondary mg-bottom">
                            <div className="alert__message">This is a secondary alert!</div>
                        </div>
                        <div className="alert alert--success mg-bottom">
                            <div className="alert__message">This is a success alert!</div>
                        </div>  
                        <div className="alert alert--danger mg-bottom">
                            <div className="alert__message">This is a danger alert!</div>
                        </div>
                        <div className="alert alert--warning mg-bottom">
                            <div className="alert__message">This is a warning alert!</div>
                        </div>
                        <div className="alert alert--dark mg-bottom">
                            <div className="alert__message">This is a dark alert!</div>
                        </div>
                        <div className="alert alert--light mg-bottom">
                            <div className="alert__message">This is a light alert!</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div className="alert alert--primary">
                            <div className="alert__message">This is a primary alert!</div>
                        </div>
                        <div className="alert alert--secondary">
                            <div className="alert__message">This is a secondary alert!</div>
                        </div>
                        <div className="alert alert--success">
                            <div className="alert__message">This is a success alert!</div>
                        </div>
                        <div className="alert alert--danger">
                            <div className="alert__message">This is a danger alert!</div>
                        </div>
                        <div className="alert alert--warning">
                            <div className="alert__message">This is a warning alert!</div>
                        </div>
                        <div className="alert alert--dark">
                            <div className="alert__message">This is a dark alert!</div>
                        </div>
                        <div className="alert alert--light">
                            <div className="alert__message">This is a light alert!</div>
                        </div>`}
                    </PreviewHighlight>
                </Preview>
            </section>
            <section id="alert-states" className="section section--lightest">
                <div className="heading">
                    <h4 className="title">With Icons</h4>
                </div>
                <Preview>
                    <PreviewDisplay>
                        <div className="alert alert--success alert--has-extra mg-bottom">
                            <span className="alert__extra">
                                <i className="icon fas fa-check"></i>
                            </span>
                            <div className="alert__message">This is a success alert!</div>
                        </div>
                        <div className="alert alert--danger alert--has-extra mg-bottom">
                            <span className="alert__extra">
                                <i className="icon fas fa-exclamation-circle"></i>
                            </span>
                            <div className="alert__message">This is a danger alert!</div>
                        </div>
                        <div className="alert alert--warning alert--has-extra">
                            <span className="alert__extra">
                                <i className="icon fas fa-exclamation-triangle"></i>
                            </span>
                            <div className="alert__message">This is a warning alert!</div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div className="alert alert--success alert--has-extra mg-bottom">
                            <span className="alert__extra">
                                <i className="icon fas fa-check"></i>
                            </span>
                            <div className="alert__message">This is a success alert!</div>
                        </div>
                        <div className="alert alert--danger alert--has-extra mg-bottom">
                            <span className="alert__extra">
                                <i className="icon fas fa-exclamation-circle"></i>
                            </span>
                            <div className="alert__message">This is a danger alert!</div>
                        </div>
                        <div className="alert alert--warning alert--has-extra mg-bottom">
                            <span className="alert__extra">
                                <i className="icon fas fa-exclamation-triangle"></i>
                            </span>
                            <div className="alert__message">This is a warning alert!</div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>
            </section> */}
        </article>
    );
};

Alert.propTypes = {
    
};

export default Alert;