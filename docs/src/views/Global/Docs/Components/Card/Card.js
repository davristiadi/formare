import React from 'react';
import { Preview, PreviewDisplay, PreviewCode } from 'components/Preview';
import { default as DummyPhoto } from '../../../../../assets/images/dummy-photo.jpeg';

const Card = props => {
    return (
        <div id="card">
            <article className="article fr-article">
                <div className="heading fr-heading">
                    <h2 className="title">Card</h2>
                    <h4 className="subtitle color-gray">The <strong>card</strong> components provide you a way to compose a group of content in
                    the most flexible way possible.</h4>
                    {/* <h4 className="subtitle color-gray">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</h4> */}
                </div>
                <section class="section mg-bottom-x-large">
                    <Preview>
                        <PreviewDisplay>
                            <div className="grids">
                                <div className="grid grid-6">
                                    <div className="card">
                                        <header className="card__header card__header--primary">
                                            <h4 className="title">Card Title</h4>
                                        </header>
                                        <main className="card__body">
                                            <div>Anim aute elit ea nulla minim duis voluptate proident occaecat ipsum tempor ex. Lorem irure eiusmod cupidatat Lorem ad. Ex consectetur laboris ullamco non reprehenderit do ad velit consequat ut adipisicing id qui irure.</div>
                                        </main>
                                        <footer className="card__footer flex jc-end">
                                            <button className="button button--primary">Submit</button>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </PreviewDisplay>
                        <PreviewCode lang="html">
                            {`<div class="card">
                                <header class="card__header">
                                    <h4 class="title">Card Title</h4>
                                    <h5 class="subtitle color-gray">This is an example card subtitle</h5>
                                </header>
                                <main class="card__body">
                                    <div>Anim aute elit ea nulla minim duis voluptate proident occaecat ipsum tempor ex. Lorem irure eiusmod cupidatat Lorem ad. Ex consectetur laboris ullamco non reprehenderit do ad velit consequat ut adipisicing id qui irure.</div>
                                </main>
                                <footer class="card__footer flex jc-end">
                                    <button class="button button--danger mg-right">Cancel</button>
                                    <button class="button button--success">Submit</button>
                                </footer>
                            </div>
                            `}
                        </PreviewCode>
                    </Preview>
                </section>
                <section className="section mg-bottom-x-large">
                    <article className="article">
                        <div className="heading">
                            <h4 className="title">Image</h4>
                        </div>
                        <p>Laborum quis consequat amet ad. Ea qui culpa occaecat consectetur deserunt eu aliquip aliqua qui. Elit ad magna magna ullamco et excepteur nisi duis dolore. Elit laboris velit ipsum minim deserunt dolore.</p>
                        <div className="fr-preview">
                            <span className="fr-preview__tag">Preview</span>
                            <div className="fr-preview__display">
                                <div className="grids">
                                    <div className="grid grid-6">
                                        <div className="card">
                                            <div className="card__image">
                                                <img src={DummyPhoto} /> 
                                            </div>
                                            <div className="card__body">
                                                <article className="article">
                                                    <div className="heading">
                                                        <h4 className="title">Card Title</h4>
                                                        <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                                    </div>
                                                    <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-6">
                                        <div className="card">
                                            <div className="card__header">
                                                <h4 className="title">Card Title</h4>
                                                <h5 className="subtitle color-gray">This is a subtitle.</h5>
                                            </div>
                                            <div className="card__image">
                                                <img src={DummyPhoto} /> 
                                            </div>
                                            <div className="card__body">
                                                <p>Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="section mg-bottom-x-large">
                    <article className="article">
                        <div className="heading">
                            <h4 className="title">Card with image overlays</h4>
                            <h6 className="subtitle color-gray">Card overlays are automatically borderless to make it aesthetically correct.</h6>
                        </div>
                        <div className="fr-preview">
                            <span className="fr-preview__tag">Preview</span>
                            <div className="fr-preview__display">
                                <div className="grids">
                                    <div className="grid grid-6 mg-bottom">
                                        <div className="card card--dark card--has-overlay">
                                            <div className="card__image">
                                                <img src={DummyPhoto} />
                                            </div>
                                            <div className="card__body">
                                                <h5 class="title">Lorem ea non cillum.</h5>
                                                <span>Cupidatat duis proident exercitation ullamco sunt labore.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="section">
                    <article className="article">
                        <div className="heading">
                            <h4 className="title">Borderless Card</h4>
                            <h6 className="subtitle color-gray">Eu duis irure proident pariatur est commodo eu veniam ut.</h6>
                        </div>
                        <div className="fr-preview">
                            <span className="fr-preview__tag">Preview</span>
                            <div className="fr-preview__display">
                                <div className="grids">
                                    <div className="grid grid-6 mg-bottom">
                                        <div className="card card--transparent">
                                            <div className="card__image">
                                                <img src={DummyPhoto} />
                                            </div>
                                            <div className="card__body">
                                                <article className="article">
                                                    <div className="heading">
                                                        <h5 className="title">This is an example card</h5>
                                                        <h6 className="subtitle color-gray">Tempor ad adipisicing fugiat labore et exercitation.</h6>
                                                    </div>
                                                    <p>Quis quis mollit ipsum sint aliquip occaecat veniam nulla do incididunt non ipsum consectetur duis.</p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </article>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;