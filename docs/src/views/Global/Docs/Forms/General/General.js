import React, { PropTypes } from 'react'
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const General = props => {
    return (
        <article className="fr-article article">
            <div className="fr-heading heading">
                <h2 className="title">Form</h2>
                <h4 className="subtitle color-gray">Non magna officia <strong>ut nisi excepteur</strong> in aliqua. Aliqua culpa cillum ea elit aute nisi sit id. Fugiat esse non Lorem nulla esse cupidatat nostrud excepteur.</h4>
            </div>
            <section className="fr-section">
                <Preview>
                    <PreviewDisplay>
                        <form className="form">
                            <div className="form__field">
                                <label className="form__label">Full Name</label>
                                <input type="text" className="input" placeholder="e.g John Doe" />
                            </div>
                            <div className="form__field">
                                <label className="form__label">Email</label>
                                <div className="input-set">
                                    <span className="input-set__extra">
                                        <i className="icon fas fa-envelope"></i>
                                    </span>
                                    <input type="text" className="input" placeholder="e.g johndoe@email.com" />
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Phone</label>
                                <div className="input-set">
                                    <span className="input-set__addon">
                                        <i className="fas fa-phone" />
                                    </span>
                                    <input type="text" className="input" placeholder="e.g +62 812 345 6789" />
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Address</label>
                                <textarea className="textarea" rows="4" placeholder="e.g Main Road, Park Avenue 5 St">
                                </textarea>
                            </div>

                        </form>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<form class="form">
                            <div class="form__field">
                                <label class="form__label">Full Name</label>
                                <input type="text" class="input" placeholder="e.g John Doe" />
                            </div>
                            <div class="form__field">
                                <label class="form__label">Email</label>
                                <div class="input-set">
                                    <span class="input-set__extra">
                                        <i class="icon fas fa-envelope"></i>
                                    </span>
                                    <input type="text" class="input" placeholder="e.g johndoe@email.com" />
                                </div>
                            </div>
                            <div class="form__field">
                                <label class="form__label">Phone</label>
                                <div class="input-set">
                                    <span class="input-set__addon">
                                        <i class="fas fa-phone" />
                                    </span>
                                    <input type="text" class="input" placeholder="e.g +62 812 345 6789" />
                                </div>
                            </div>
                        </form>
                        `}
                    </PreviewHighlight>
                    {/* <PreviewCode lang="html">
                        {``}
                    </PreviewCode> */}
                </Preview>
            </section>
            <br />
        </article>
    )
}

General.propTypes = {
    
}

export default General