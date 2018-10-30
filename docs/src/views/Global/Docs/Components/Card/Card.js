import React from 'react';
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';
import { Highlight } from 'components/Highlight';
import { default as DummyPhoto } from '../../../../../assets/images/dummy-photo.jpeg';

const Card = props => {
    return (
        <article className="fr-article">
            <div className="fr-article-heading">
                <h2 className="fr-article-title">Card</h2>
                <h5 className="fr-article-subtitle">Culpa culpa deserunt magna nostrud sunt adipisicing cillum commodo dolore cupidatat nostrud veniam. Commodo id nulla consectetur aliqua aute. Fugiat irure consectetur cillum pariatur laboris est.</h5>
            </div>
            <section id="overview" className="fr-article-section">
                <div className="grids mg-bottom-large">
                    <div className="grid grid-12 grid-md-6">
                        <div className="card">
                            <header className="card__header">
                                <h5 className="title">Card Title</h5>
                                <h6 className="subtitle color-gray">This is a subtitle</h6>
                            </header>
                            <main className="card__body">
                                <div>Anim aute elit ea nulla minim duis voluptate proident occaecat ipsum tempor ex. Lorem irure eiusmod cupidatat Lorem ad. Ex consectetur laboris ullamco non reprehenderit do ad velit consequat ut adipisicing id qui irure.</div>
                            </main>
                            <footer className="card__footer">
                                <button className="button button--primary">Submit</button>
                            </footer>
                        </div>
                    </div>
                </div>
                <Highlight lang="html">
                    {`<div class="card">
                        <header class="card__header flex jc-between ai-center">
                            <div>
                                <h4 class="title">Card Title</h4>
                                <h6 class="subtitle color-gray">This is a subtitle</h6>
                            </div>
                        </header>
                        <main class="card__body">
                            <div>Anim aute elit ea nulla minim duis voluptate proident occaecat ipsum tempor ex. 
                            Lorem irure eiusmod cupidatat Lorem ad. Ex consectetur laboris ullamco non
                            reprehenderit do ad velit consequat ut adipisicing id qui irure.</div>
                        </main>
                        <footer class="card__footer">
                            <button class="button button--primary">Submit</button>
                        </footer>
                    </div>
                    `}
                </Highlight>
            </section>

            <section id="card-with-thumbnail" className="mg-bottom-x-large">
                <div className="heading">
                    <h4 className="title">Card with Thumbnail</h4>
                </div>
                <p>Minim fugiat ad aliquip aute magna in aliquip cupidatat incididunt. Voluptate Lorem incididunt velit do in do eu laboris consectetur nulla ullamco.</p>
                <Preview>
                    <PreviewDisplay>
                        <div className="grids">
                            <div className="grid grid-6">
                                <div className="card">
                                    <div className="card__image">
                                        <img src={DummyPhoto} />
                                    </div>
                                    <div className="card__body">
                                        <div className="heading">
                                            <h4 className="title">Card Title</h4>
                                            <h6 className="subtitle color-gray">This is a subtitle.</h6>
                                        </div>
                                        <p>
                                            Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore
                                            deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum
                                            culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.
                                        </p>
                                    </div>
                                    <div className="card__footer">
                                        <button className="button button--primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<div class="card">
                            <div class="card__image">
                                <img src="path/to/image" /> 
                            </div>
                            <div class="card__body">
                                <article class="article">
                                    <div class="heading">
                                        <h4 class="title">Card Title</h4>
                                        <h6 class="subtitle color-gray">This is a subtitle.</h6>
                                    </div>
                                    <p>
                                        Tempor eiusmod excepteur esse culpa qui elit sint aliqua dolor. Qui mollit esse officia labore
                                        deserunt laborum dolore. Adipisicing mollit dolore eiusmod aute pariatur nulla culpa laborum 
                                        culpa et dolore aute aute. Aute voluptate excepteur velit proident laboris qui.
                                    </p>
                                </article>
                            </div>
                            <div class="card__footer">
                                <button class="button button--primary">Submit</button>
                            </div>
                        </div>
                        `}
                    </PreviewHighlight>
                </Preview>
            </section>

            <section className="section mg-bottom-x-large">
                <article className="article">
                    <div className="heading">
                        <h4 className="title">Card with Overlays</h4>
                    </div>
                    <p>Card overlays are automatically borderless to make it aesthetically correct.</p>
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
    );
};

Card.propTypes = {

};

export default Card;