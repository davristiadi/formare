import React, { PropTypes } from 'react'
import { Preview, PreviewDisplay, PreviewCode } from 'components/Preview';

const General = props => {
    return (
        <article className="fr-article article">
            <div className="fr-heading heading">
                <h3 className="title">Form</h3>
                <h5 className="subtitle color-gray">Non magna officia <strong>ut nisi excepteur</strong> in aliqua. Aliqua culpa cillum ea elit aute nisi sit id. Fugiat esse non Lorem nulla esse cupidatat nostrud excepteur.</h5>
            </div>
            <section className="fr-section">
                <div className="grids">
                    <div className="grid">
                        <Preview>
                            <PreviewDisplay>
                                <form className="form">
                                    <div className="form__field">
                                        <label className="form__label">Full Name</label>
                                        <input type="text" className="input" placeholder="e.g: John Doe" />
                                    </div>
                                    <div className="form__field form__field--danger">
                                        <label className="form__label">Email Address</label>
                                        <div className="input-set">
                                            <span className="input-set__extra">
                                                <i className="icon fas fa-envelope"></i>
                                            </span>
                                            <input type="text" className="input" placeholder="e.g: johndoe@email.com" />
                                        </div>
                                        <small className="color-danger">The inserted email address has an invalid format.</small>
                                    </div>
                                    <div className="form__field">
                                        <label className="form__label">Phone Number</label>
                                        <div className="input-set">
                                            <span className="input-set__addon">+62</span>
                                            <input type="text" className="input" />
                                        </div>
                                    </div>
                                    <div className="form__field">
                                        <label className="form__label">Disabled</label>
                                        <div className="input-set">
                                            <span className="input-set__addon">+62</span>
                                            <input type="text" className="input" disabled />
                                        </div>
                                    </div>
                                </form>
                            </PreviewDisplay>
                            
                        </Preview>
                    </div>
                </div>
            </section>
            <br />
        </article>
    )
}

General.propTypes = {
    
}

export default General