import React, { PropTypes } from 'react'
import { Preview, PreviewDisplay, PreviewHighlight } from 'components/Preview';

const General = props => {
    return (
        <article className="fr-article article">
            <div className="fr-heading heading">
                <h2 className="title">Form</h2>
                <h5 className="subtitle color-gray">Voluptate irure ex esse aliquip laborum voluptate est excepteur mollit pariatur</h5>
            </div>
            <section className="fr-section">
                <div className="heading">
                    <h4 className="title">Overview</h4>
                </div>
                <p>Sunt minim eiusmod exercitation laborum mollit commodo quis pariatur ex ut non ullamco sint ad. Minim velit fugiat aliqua reprehenderit officia aute magna consequat consectetur eu esse pariatur eu.</p>
                <Preview>
                    <PreviewDisplay>
                        <form className="form">
                            <div className="form__field">
                                <label className="form__label">Name</label>
                                <div className="form__input">
                                    <input type="text" className="input" placeholder="e.g John Doe" />
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Email</label>
                                <div className="form__input">
                                    <div className="input-set">
                                        <div className="input-set__icon">
                                            <i className="icon fas fa-envelope"></i>
                                        </div>
                                        <input type="text" className="input" placeholder="e.g johndoe@email.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Phone</label>
                                <div className="form__input">
                                    <div className="input-set">
                                        <div className="input-set__extra">
                                            <i className="icon fas fa-phone" />
                                        </div>
                                        <input type="text" className="input" placeholder="e.g +62 812 345 678" />
                                    </div>
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Address</label>
                                <div className="form__input">
                                    <textarea className="textarea" rows="3" placeholder="e.g Bryar Pitts, 5543 Aliquet St. Fort Dodge GA 20783, (717) 450-4729"></textarea>
                                </div>
                            </div>
                            <div className="form__field">
                                <label className="form__label">Website</label>
                                <div className="form__input">
                                    <div className="select">
                                        <select>
                                            <option>https://</option>
                                            <option>http://</option>
                                        </select>
                                    </div>
                                    <input type="text" className="input" placeholder="e.g formare.com" />
                                    <div className="select">
                                        <select>
                                            <option>.com</option>
                                            <option>.co.id</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </PreviewDisplay>
                    <PreviewHighlight lang="html">
                        {`<form class="form">
                            <div class="form__field">
                                <label class="form__label">Name</label>
                                <input type="text" class="input" placeholder="e.g John Doe" />
                            </div>
                            <div class="form__field">
                                <label class="form__label">Email</label>
                                <div class="input-set">
                                    <div class="input-set__icon">
                                        <i class="icon fas fa-envelope"></i>
                                    </div>
                                    <input type="text" class="input" placeholder="e.g johndoe@email.com" />
                                </div>
                            </div>
                            <div class="form__field">
                                <label class="form__label">Phone</label>
                                <div class="form__input">
                                    <div class="input-set">
                                        <div class="input-set__extra">
                                            <i class="icon fas fa-phone" />
                                        </div>
                                        <input type="text" class="input" placeholder="e.g +62 812 345 678" />
                                    </div>
                                </div>
                            </div>
                            <div class="form__field">
                                <label class="form__label">Address</label>
                                <div class="form__input">
                                    <textarea class="textarea" rows="3" placeholder="e.g Bryar Pitts, 5543 Aliquet St. Fort Dodge GA 20783, (717) 450-4729"></textarea>
                                </div>
                            </div>
                            <div class="form__field">
                                <label class="form__label">Website</label>
                                <div class="form__input">
                                    <div class="select">
                                        <select>
                                            <option>https://</option>
                                            <option>http://</option>
                                        </select>
                                    </div>
                                    <input type="text" class="input" placeholder="e.g formare.com" />
                                    <div class="select">
                                        <select>
                                            <option>.com</option>
                                            <option>.co.id</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        `}
                    </PreviewHighlight>
                </Preview>
            </section>
            <br />
        </article>
    )
}

General.propTypes = {
    
}

export default General