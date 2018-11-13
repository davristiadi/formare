import React, { PropTypes } from "react";
import { Preview, PreviewDisplay, PreviewHighlight } from "components/Preview";

const General = props => {
  return (
    <article className="fr-article">
      <div className="fr-article-heading">
        <h2 className="title">Form</h2>
        <h5 className="subtitle color-gray">
          Voluptate irure ex esse aliquip laborum voluptate est excepteur mollit
          pariatur
        </h5>
      </div>

      <section id="overview" className="fr-article-section">
        <div className="heading">
          <h4 className="title">Overview</h4>
        </div>
        <p>
          Sunt minim eiusmod exercitation laborum mollit commodo quis pariatur
          ex ut non ullamco sint ad. Minim velit fugiat aliqua reprehenderit
          officia aute magna consequat consectetur eu esse pariatur eu.
        </p>
        <Preview>
          <PreviewDisplay>
            <form className="form">
              <div className="form__field">
                <label className="form__label">Name</label>
                <div className="form__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g John Doe"
                  />
                </div>
              </div>
              <div className="form__field">
                <label className="form__label">Email</label>
                <div className="form__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g johndoe@email.com"
                  />
                </div>
              </div>
              <div className="form__field">
                <label className="form__label">Password</label>
                <div className="form__input">
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Insert your password here"
                  />
                </div>
                <div className="fs-small color-gray mg-top-xx-small">Password should be at least 8 characters or more.</div>
              </div>
            </form>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<form className="form">
              <div className="form__field">
                <label className="form__label">Name</label>
                <div className="form__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g John Doe"
                  />
                </div>
              </div>
              <div className="form__field">
                <label className="form__label">Email</label>
                <div className="form__input">
                  <input
                    type="text"
                    className="input"
                    placeholder="e.g johndoe@email.com"
                  />
                </div>
              </div>
              <div className="form__field">
                <label className="form__label">Password</label>
                <div className="form__input">
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Insert your password here"
                  />
                </div>
                <div className="fs-small color-gray mg-top-xx-small">Password should be at least 8 characters or more.</div>
              </div>
            </form>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
      
      <section className="fr-article-section">
        <div className='heading'>
          <h4 className="title">Form Input</h4>
        </div>
        <p>Occaecat ut magna tempor consequat aute proident dolor occaecat.</p>
        <Preview>
          <PreviewDisplay>
            <form className="form">
              <div className="grids">
                <div className="grid grid-6">
                  <div className="form__field">
                    <label className="form__label">Search</label>
                    <div className="form__control">
                      <input type="text" placeholder="Insert keyword" className="input" />
                      <button className="button button--primary">Search Now</button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-6">
                  <div className="form__field">
                    <label className="form__label">Select</label>
                    <div className="form__control">
                      <div className="select select--expanded">
                        <select>
                          <option>Yo</option>
                        </select>
                      </div>
                      <button className="button button--raised">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </PreviewDisplay>
          <PreviewHighlight lang="html">
            {`<form className="form">
              <div className="form__field">
                <label className="form__label">Search</label>
                <div className="form__input">
                  <div className="input-set">
                    <div className="input-set__icon">
                      <i className="icon fas fa-icon fa-search"></i>
                    </div>
                    <input type="text" placeholder="Insert keyword" className="input" />
                  </div>
                  <button className="button button--primary">Search Now</button>
                </div>
              </div>
            </form>
            `}
          </PreviewHighlight>
        </Preview>
      </section>
    </article>
  );
};

General.propTypes = {};

export default General;
