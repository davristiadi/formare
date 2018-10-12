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
                <Preview>
                    <PreviewDisplay>
                        <form className="form">
                            <div className="form__field">
                                <label className="form__label">Input</label>
                                <input type="text" className="input" placeholder="Some placeholder" />
                            </div>
                            <div className="form__field">
                                <label className="form__label">Themed Input</label>
                                <input type="text" className="input input--danger" placeholder="Some placeholder" />
                            </div>
                            <div className="form__field">
                                <label className="form__label">Disabled Input</label>
                                <input type="text" className="input" placeholder="Some placeholder" disabled />
                            </div>
                            <div className="form__field form__field--danger">
                                <label className="form__label">Themed Disabled Input</label>
                                <input type="text" className="input" placeholder="Some placeholder" />
                            </div>
                        </form>
                    </PreviewDisplay>
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