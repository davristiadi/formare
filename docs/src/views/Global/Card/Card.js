import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
    return (
        <div id="card">
            <article className="article fr-article">
                <div className="heading fr-heading">
                    <h3 className="title">Card</h3>
                    <h5 className="subtitle color-gray">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</h5>
                </div>
                <section>
                    <div className="grids">
                        <div className="grid grid-6 mg-bottom">
                            <div className="card">
                                <div className="card__header">
                                    <h4 className="title">Card Title</h4>
                                    <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                </div>
                                <div className="card__body">
                                    <span>Id anim officia commodo voluptate magna aliqua. Laborum pariatur ullamco occaecat labore aliqua et quis. Eiusmod reprehenderit pariatur laborum aute Lorem nisi et. Consectetur labore est consectetur officia. Laborum minim officia irure aliquip eu commodo aute. Quis culpa reprehenderit excepteur irure in. Est minim laborum consectetur nisi aliqua in sunt do veniam.</span>
                                </div>
                                <div className="card__footer flex jc-end">
                                    <button className="button button--danger mg-right">Cancel</button>
                                    <button className="button button--success">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-6 mg-bottom">
                            <div className="card">
                                <div className="card__header">
                                    <h4 className="title">Card Title</h4>
                                    <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                </div>
                                <div className="card__body">
                                    <span>Id anim officia commodo voluptate magna aliqua. Laborum pariatur ullamco occaecat labore aliqua et quis. Eiusmod reprehenderit pariatur laborum aute Lorem nisi et. Consectetur labore est consectetur officia. Laborum minim officia irure aliquip eu commodo aute. Quis culpa reprehenderit excepteur irure in. Est minim laborum consectetur nisi aliqua in sunt do veniam.</span>
                                </div>
                                <div className="card__footer flex jc-end">
                                    <button className="button button--danger mg-right">Cancel</button>
                                    <button className="button button--success">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-6 mg-bottom">
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c0202cc94df51412fc49471d653eee5&auto=format&fit=crop&w=1350&q=80" /> 
                                </div>
                                <div className="card__header">
                                    <h4 className="title">Card Title</h4>
                                    <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                </div>
                                <div className="card__body">
                                    <article className="article">
                                        {/* <div className="heading">
                                            <h4 className="title">Card Title</h4>
                                            <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                        </div> */}
                                        <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-6 mg-bottom">
                            <div className="card">
                                <div className="card__image">
                                    <img src="https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c0202cc94df51412fc49471d653eee5&auto=format&fit=crop&w=1350&q=80" /> 
                                </div>
                                <div className="card__header">
                                    <h4 className="title">Card Title</h4>
                                    <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                </div>
                                <div className="card__body">
                                    <article className="article">
                                        {/* <div className="heading">
                                            <h4 className="title">Card Title</h4>
                                            <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                        </div> */}
                                        <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-6 mg-bottom">
                            <div className="card card--dark card--has-overlay">
                                <div class="card__image">
                                    <img src="https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c0202cc94df51412fc49471d653eee5&auto=format&fit=crop&w=1350&q=80" />
                                </div>
                                <div className="card__body">
                                    <h5 class="title">Lorem ea non cillum.</h5>
                                    <span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-6 mg-bottom">
                            <div className="card card--dark card--has-overlay">
                                <div class="card__image">
                                    <img src="https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c0202cc94df51412fc49471d653eee5&auto=format&fit=crop&w=1350&q=80" />
                                </div>
                                <div className="card__body">
                                    <h5 class="title">Lorem ea non cillum.</h5>
                                    <span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </article>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;