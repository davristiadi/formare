import React from 'react';
import { Preview, PreviewDisplay, PreviewCode } from 'components/Preview';

const Alert = props => {
    return (
        <div id="alert">
            <article className="fr-article article">
            <div className="heading fr-heading">
                    <h3 className="title">Alerts</h3>
                    <h5 className="subtitle color-gray">Consectetur esse laboris do aliqua ex est incididunt aute officia irure mollit aliquip. Ut do anim duis consequat eu dolor ut officia ipsum fugiat officia.</h5>
                </div>
                <section className="section mg-bottom-x-large">
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
                        <PreviewCode lang="html">
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
                        </PreviewCode>
                    </Preview>
                </section>
                <section className="section">
                    <div className="heading">
                        <h4 className="title">Alert States</h4>
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
                        <PreviewCode lang="html">
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
                        </PreviewCode>
                    </Preview>
                </section>
            </article>
        </div>
    );
};

Alert.propTypes = {
    
};

export default Alert;